$( document ).ready(function() {
  $("code").each(function() {
    $(this).addClass("brush: cpp");
  });

  SyntaxHighlighter.config.tagName = "code";
  SyntaxHighlighter.all();
});
