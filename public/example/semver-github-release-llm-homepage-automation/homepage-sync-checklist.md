# homepage sync checklist

## dispatch

- After a published stable release, the source repo release workflow should explicitly `workflow_dispatch` the homepage sync workflow
- Do not rely on `release.published` alone when the release is published by `GITHUB_TOKEN`
- The dispatch token should be scoped to the homepage repo only

## import

- The import script must reject draft, prerelease, and unpublished releases
- The Astro content path should receive a `<tag>.md` file

## verification

- Check the final title/body through `gh release view`
- Confirm the homepage build succeeds
- Confirm the latest release appears on the product page
- Confirm rerunning the same tag ends as a no-op
