export default {
  async fetch(request, env, ctx) {
    //
    if(/data$/.test(request.url)){
      let data = await fetch('https://konni.delthas.fr/games');
      let result = new Response(data.body,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
        );
      return result;
    }else{
      const assetRequest = new Request(new URL('/list.html', request.url));
      return await env.ASSETS.fetch(assetRequest);
    }
  }
};
