// The single source of truth for the primary "Get started" action across
// the site. Points to the Stripe Payment Link (self-serve checkout, no call
// required - see CLAUDE.md standing rule 5) once it exists; every CTA below
// was previously hardcoded to /contact (a manual form promising a 1-business-
// day reply), which contradicted that self-serve positioning on every page.
//
// TODO: replace with the real Stripe Payment Link URL once Enzo provides it.
export const GET_STARTED_HREF = "/contact";
