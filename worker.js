import htmlContent from './res/list.html' assert { type: 'text' };
import allhtmlContent from './res/all.html' assert { type: 'text' };
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
    if(/all$/.test(request.url)){
      return new Response(allhtmlContent, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    return new Response(htmlContent, {
        headers: { 'Content-Type': 'text/html' }
      });
  }
};
