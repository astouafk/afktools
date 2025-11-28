self.__BUILD_MANIFEST = {
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/project/:id",
        "destination": "/projects/:id"
      },
      {
        "source": "/project/:id/analysis",
        "destination": "/projects/:id/analysis"
      },
      {
        "source": "/project/:id/reports",
        "destination": "/projects/:id/reports"
      },
      {
        "source": "/project/:id/analysis/create",
        "destination": "/projects/:id/analysis/create"
      },
      {
        "source": "/project/:id/analysis/:analysisId",
        "destination": "/projects/:id/analysis/:analysisId"
      },
      {
        "source": "/project/:id/analysis/:analysisId/edit",
        "destination": "/projects/:id/analysis/:analysisId/edit"
      },
      {
        "source": "/project/:id/reports",
        "destination": "/projects/:id/reports"
      },
      {
        "source": "/project/:id/reports/create",
        "destination": "/projects/:id/reports/create"
      },
      {
        "source": "/project/:id/reports/:reportId",
        "destination": "/projects/:id/reports/:reportId"
      },
      {
        "source": "/project/:id/reports/:reportId/edit",
        "destination": "/projects/:id/reports/:reportId/edit"
      },
      {
        "source": "/reports/:reportId",
        "destination": "/reports/:reportId"
      },
      {
        "source": "/project/:id/team",
        "destination": "/projects/:id/team"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()