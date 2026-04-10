# homepage sync checklist

## dispatch

- Only a published stable release should trigger the homepage workflow
- The dispatch token should be scoped to the homepage repo only

## import

- The import script must reject draft, prerelease, and unpublished releases
- The Astro content path should receive a `<tag>.md` file

## verification

- Check the final title/body through `gh release view`
- Confirm the homepage build succeeds
- Confirm the latest release appears on the product page
- Confirm rerunning the same tag ends as a no-op
