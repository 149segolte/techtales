import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import { AUTH_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
    providers: [
        Google
    ],
    secret: AUTH_SECRET,
    trustHost: true,
})
