// The single source of truth for the primary "Get started" action across
// the site. Points to the real Stripe Payment Link (self-serve checkout, no
// call required - see CLAUDE.md standing rule 5); every CTA below used to be
// hardcoded to /contact (a manual form promising a 1-business-day reply),
// which contradicted that self-serve positioning on every page.
//
// ?locale=en forces the Checkout page to English for every visitor -
// without it, Stripe auto-detects language from the visitor's browser,
// which would show French to anyone with a French-language browser even
// though every customer here is a US real estate agent.
export const GET_STARTED_HREF = "https://buy.stripe.com/aFafZh06zbP72TveXt77O01?locale=en";
