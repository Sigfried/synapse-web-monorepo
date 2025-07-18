import { useDeletePersonalAccessToken } from '@/synapse-queries/user/usePersonalAccessToken'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import {
  Box,
  Card,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  AccessTokenRecord,
  scopeDescriptions,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { noop } from 'lodash-es'
import { useCallback, useState } from 'react'
import IconSvg from '../../IconSvg/IconSvg'
import WarningDialog from '../../SynapseForm/WarningDialog'

dayjs.extend(relativeTime)

export type AccessTokenCardProps = {
  /** Record referring to an access token, not a token itself */
  accessToken: AccessTokenRecord
  onDelete?: () => void
}

export const EXPIRED_PAT_WARNING =
  'This token has expired. It no longer works and can only be deleted.'

export function AccessTokenCard(props: AccessTokenCardProps) {
  const { accessToken, onDelete = noop } = props
  const [showModal, setShowModal] = useState(false)

  const isExpired = accessToken.state === 'EXPIRED'

  const { mutate: deleteToken, isPending: deleteIsPending } =
    useDeletePersonalAccessToken({
      onSuccess: () => {
        onDelete()
      },
      throwOnError: true,
    })

  const onClickDeleteButton = useCallback(() => {
    if (isExpired) {
      // token no longer works, no need for warning/confirmation
      deleteToken(accessToken.id)
    } else {
      setShowModal(true)
    }
  }, [accessToken.id, deleteToken, isExpired])

  const warningDialog = (
    <WarningDialog
      title={'Confirm Deletion'}
      content={
        <>
          <Typography variant={'body1'}>
            If you delete this token, any applications using it will stop
            working. This action cannot be undone.
          </Typography>
          <Typography
            variant={'body1'}
            sx={{
              fontWeight: '700',
            }}
          >
            Are you sure you want to delete this token?
          </Typography>
        </>
      }
      confirmButtonText={'Delete Token'}
      onCancel={() => setShowModal(false)}
      onConfirm={() => {
        deleteToken(accessToken.id)
        setShowModal(false)
      }}
      confirmButtonColor="error"
      open={showModal}
    />
  )
  return (
    <Card
      sx={{
        my: 2,
        height: '120px',
        width: '100%',
        p: 1.5,
        pl: 4,
        backgroundColor: isExpired ? '#fcf8e3' : 'inherit',
      }}
    >
      {warningDialog}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Stack
          sx={{
            flexGrow: 1,
            gap: 1,
            justifyContent: 'space-between',
          }}
        >
          <Typography variant={'headline3'} sx={{ fontSize: '16px' }}>
            {accessToken.name}
          </Typography>
          <div>
            <span>Permissions: </span>
            {accessToken.scopes.map(scope => {
              const scopeDescriptionKey =
                scope as keyof typeof scopeDescriptions
              let scopeDescription = scopeDescriptions[scopeDescriptionKey]
              if (scopeDescription === undefined) {
                const titleCaseScope =
                  scope.charAt(0).toUpperCase() + scope.slice(1)
                scopeDescription = {
                  displayName: titleCaseScope,
                  description: titleCaseScope,
                }
              }
              return (
                <Tooltip key={scope} title={scopeDescription.description}>
                  <Typography
                    component={'span'}
                    variant={'smallText1'}
                    sx={{ mx: 0.25, cursor: 'default', color: 'primary.main' }}
                  >
                    {scopeDescription.displayName}
                  </Typography>
                </Tooltip>
              )
            })}
          </div>
          <div>
            <Typography component={'span'} variant={'smallText1'}>
              Last used {dayjs(accessToken.lastUsed).fromNow()}
            </Typography>
            <Typography
              component={'span'}
              variant={'smallText1'}
              sx={{
                color: 'grey.700',
              }}
            >
              {' | '}
            </Typography>
            <Typography component={'span'} variant={'smallText1'}>
              Created {dayjs(accessToken.createdOn).fromNow()}
            </Typography>
          </div>
        </Stack>
        <Box
          sx={{
            alignSelf: 'flex-start',
            display: 'flex',
            gap: 1,
            alignItems: 'center',
          }}
        >
          {isExpired && (
            <Tooltip title={EXPIRED_PAT_WARNING} placement={'top'}>
              <IconButton>
                <IconSvg
                  icon="warning"
                  sx={{ color: 'warning.main', fontSize: 'inherit' }}
                  wrap={false}
                />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title={'Delete Token'} placement={'top'}>
            <IconButton
              disabled={deleteIsPending}
              color="error"
              onClick={onClickDeleteButton}
            >
              <DeleteTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  )
}
