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
    }
    return new Response('ok', {
        headers: { 'Content-Type': 'text/text' }
    });

  }
};
