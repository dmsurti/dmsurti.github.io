const yourCustomFunction01 = (message) => {
  console.log(message);
};

document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    codeBlock.classList.add('line-numbers');
});

document.querySelectorAll('img').forEach(function (codeBlock) {
    mediumZoom(codeBlock);
});
