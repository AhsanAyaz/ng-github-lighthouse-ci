module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./dist/ng-github-lighthouse-ci",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 1 }],
        "installable-manifest": "on",
        "offline-start-url": "on",
        "service-worker": "on",
        "works-offline": "on",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
