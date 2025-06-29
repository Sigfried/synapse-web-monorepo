/**
 * SWC.index.ts represents the entry point for the Synapse React Client library as it is published to NPM and
 * used by SynapseWebClient.
 *
 * If you wish to export a component or other object to be used by SynapseWebClient, you should add it to this file.
 */

import { lazy } from 'react'
import { version } from '../package.json'
import {
  displayToast,
  SynapseToastContainer,
} from './components/ToastMessage/ToastMessage'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import Palettes from './theme/palette/Palettes'
import { SynapseConstants } from './utils'
import { sendAnalyticsEvent } from './utils/analytics/sendAnalyticsEvent'
import {
  sendSearchQuerySubmittedEvent,
  sendSearchResultClickedEvent,
  sendSearchResultReturnedEvent,
  sendSearchResultsReturnedEvent,
} from './utils/analytics/sendSearchEvent'
import { FullContextProvider } from './utils/context/FullContextProvider'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/context/SynapseContext'
import { BackendDestinationEnum } from './utils/functions'
import { xssOptions } from './utils/functions/SanitizeHtmlUtils'
import { getCurrentCookiePreferences } from './utils/hooks'

// Also include scss in the bundle
import './style/main.scss'

const SynapseEnums = {
  BackendDestinationEnum,
}

const SynapseContext = {
  FullContextProvider,
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
}

const SynapseComponents = {
  SynapseToastContainer,
  displayToast,
  getCurrentCookiePreferences,
  EntityForm: lazy(() => import('./components/EntityForm/EntityForm')),
  UserCard: lazy(() => import('./components/UserCard/UserCard')),
  StatisticsPlot: lazy(() => import('./components/StatisticsPlot')),
  HasAccess: lazy(() => import('./components/HasAccess/HasAccessV2')),
  EvaluationCard: lazy(() => import('./components/Evaluation/EvaluationCard')),
  EvaluationEditorPage: lazy(
    () => import('./components/Evaluation/EvaluationEditorPage'),
  ),
  AccountLevelBadges: lazy(
    () => import('./components/AccountLevelBadges/AccountLevelBadges'),
  ),
  PageProgress: lazy(() => import('./components/PageProgress/PageProgress')),
  SynapseHomepageV2: lazy(
    () => import('./components/SynapseHomepageV2/SynapseHomepageV2'),
  ),
  SynapsePlansPage: lazy(
    () => import('./components/SynapseHomepageV2/SynapsePlansPage'),
  ),
  SynapseFooter: lazy(() => import('./components/SynapseFooter/SynapseFooter')),
  EntityFinder: lazy(() => import('./components/EntityFinder/EntityFinder')),
  ErrorPage: lazy(() => import('./components/error/ErrorPage')),
  EntityBadgeIcons: lazy(
    () => import('./components/EntityBadgeIcons/EntityBadgeIcons'),
  ),
  DownloadCartPage: lazy(
    () => import('./components/DownloadCart/DownloadCartPage'),
  ),
  DownloadConfirmation: lazy(
    () => import('./components/download_list/FolderDownloadConfirmation'),
  ),
  FullWidthAlert: lazy(
    () => import('./components/FullWidthAlert/FullWidthAlert'),
  ),
  SynapseNavDrawer: lazy(
    () => import('./components/SynapseNavDrawer/SynapseNavDrawer'),
  ),
  FavoritesPage: lazy(() => import('./components/favorites/FavoritesPage')),
  EntityCitation: lazy(() => import('./components/EntityCitation')),
  EntityModal: lazy(() => import('./components/entity/metadata/EntityModal')),
  IconSvg: lazy(() => import('./components/IconSvg/IconSvg')),
  UserProfileLinks: lazy(
    () => import('./components/UserProfileLinks/UserProfileLinks'),
  ),
  DatasetItemsEditor: lazy(
    () => import('./components/SynapseTable/datasets/DatasetItemsEditor'),
  ),
  EntityTypeIcon: lazy(() => import('./components/EntityIcon')),
  HelpPopover: lazy(() => import('./components/HelpPopover/HelpPopover')),
  SkeletonButton: lazy(() => import('./components/Skeleton/SkeletonButton')),
  QueryWrapperPlotNav: lazy(
    () => import('./components/QueryWrapperPlotNav/QueryWrapperPlotNav'),
  ),
  StandaloneQueryWrapper: lazy(
    () => import('./components/StandaloneQueryWrapper/StandaloneQueryWrapper'),
  ),
  ForumSearch: lazy(() => import('./components/ForumSearch/ForumSearch')),
  DiscussionThread: lazy(() => import('./components/Forum/DiscussionThread')),
  ReviewerDashboard: lazy(
    () => import('./components/dataaccess/ReviewerDashboard'),
  ),
  ProvenanceGraph: lazy(
    () => import('./components/ProvenanceGraph/ProvenanceGraph'),
  ),
  TrashCanList: lazy(() => import('./components/trash/TrashCanList')),
  OAuthManagement: lazy(
    () => import('./components/OAuthClientManagement/OAuthManagement'),
  ),
  CertificationQuiz: lazy(
    () => import('./components/CertificationQuiz/CertificationQuiz'),
  ),
  HtmlPreview: lazy(
    () => import('./components/FilePreview/HtmlPreview/HtmlPreview'),
  ),
  IDUReport: lazy(() => import('./components/IDUReport/IDUReport')),
  EntityPageBreadcrumbs: lazy(
    () => import('./components/entity/page/breadcrumbs/EntityPageBreadcrumbs'),
  ),
  EntityActionMenu: lazy(
    () => import('./components/entity/page/action_menu/EntityActionMenu'),
  ),
  EntityPageTitleBar: lazy(
    () => import('./components/entity/page/title_bar/EntityPageTitleBar'),
  ),
  CreatedByModifiedBy: lazy(
    () => import('./components/entity/page/CreatedByModifiedBy'),
  ),
  SubscriptionPage: lazy(() => import('./components/SubscriptionPage')),
  OrientationBanner: lazy(
    () => import('./components/OrientationBanner/OrientationBanner'),
  ),
  AvailableEvaluationQueueList: lazy(
    () =>
      import('./components/ChallengeSubmission/AvailableEvaluationQueueList'),
  ),
  AccessRequirementList: lazy(
    () => import('./components/AccessRequirementList/AccessRequirementList'),
  ),
  EntityHeaderTable: lazy(() => import('./components/EntityHeaderTable')),
  AccessRequirementRelatedProjectsList: lazy(
    () => import('./components/AccessRequirementRelatedProjectsList'),
  ),
  CreateTableViewWizard: lazy(
    () => import('./components/CreateTableViewWizard/CreateTableViewWizard'),
  ),
  TableColumnSchemaEditor: lazy(
    () =>
      import('./components/TableColumnSchemaEditor/TableColumnSchemaEditor'),
  ),
  SqlDefinedTableEditorModal: lazy(
    () =>
      import('./components/SqlDefinedTableEditor/SqlDefinedTableEditorModal'),
  ),
  EntityViewScopeEditorModal: lazy(
    () =>
      import('./components/EntityViewScopeEditor/EntityViewScopeEditorModal'),
  ),
  SubmissionViewScopeEditorModal: lazy(
    () =>
      import(
        './components/SubmissionViewScopeEditor/SubmissionViewScopeEditorModal'
      ),
  ),
  AccessRequirementAclEditor: lazy(
    () => import('./components/AccessRequirementAclEditor'),
  ),
  CreateOrUpdateAccessRequirementWizard: lazy(
    () => import('./components/CreateOrUpdateAccessRequirementWizard'),
  ),
  GoogleAnalytics: lazy(
    () => import('./components/GoogleAnalytics/GoogleAnalytics'),
  ),
  CookiesNotification: lazy(() => import('./components/CookiesNotification')),
  EntityAclEditorModal: lazy(
    () => import('./components/EntityAclEditor/EntityAclEditorModal'),
  ),
  SynapseChat: lazy(() => import('./components/SynapseChat/SynapseChat')),
  RejectProfileValidationRequestModal: lazy(
    () => import('./components/dataaccess/RejectProfileValidationRequestModal'),
  ),
  GovernanceMarkdownGithub: lazy(
    () => import('./components/Markdown/MarkdownGithub'),
  ),
  ProjectDataAvailability: lazy(
    () => import('./components/ProjectStorage/ProjectDataAvailability'),
  ),
  EntityUploadModal: lazy(
    () => import('./components/EntityUpload/EntityUploadModal'),
  ),
  CreateOrUpdateDoiModal: lazy(
    () => import('./components/doi/CreateOrUpdateDoiModal'),
  ),
  UserAccessRequestHistoryPlace: lazy(
    () =>
      import(
        './components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPlace'
      ),
  ),
}

const Analytics = {
  sendAnalyticsEvent,
  sendSearchQuerySubmittedEvent,
  sendSearchResultsReturnedEvent,
  sendSearchResultReturnedEvent,
  sendSearchResultClickedEvent,
}

// Include the version in the build
const SynapseReactClientVersion = version

export {
  Analytics,
  HttpClient,
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseEnums,
  SynapseQueries,
  Palettes,
  xssOptions,
}
