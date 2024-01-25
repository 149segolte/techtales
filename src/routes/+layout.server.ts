import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, params }) => {
    let res = {
        session: await locals.getSession()
    };
    if (params.workspace)
        res.workspace = params.workspace;
    return res;
};
