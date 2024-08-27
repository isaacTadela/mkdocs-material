// mkdocs_pyscript/js/makeblocks.js
function addButtons() {
  const wrappers = document.querySelectorAll(".py-wrapper");
  wrappers.forEach((wrapper) => {
    const codeblock = wrapper.querySelector("code");
    if (!codeblock)
      return;
    const pySrc = codeblock.textContent;
    const codeEnv = codeblock.hasAttribute("env") ? codeblock.getAttribute("env") : null;
    console.log(codeEnv);
    const btn = document.createElement("a");
    btn.style.cssText = "position:absolute; width:80px; height:30px; bottom:3px; right:3px; background-color:#7773f7; color:#FFF; border-radius:5px; text-align:center; box-shadow: 2px 2px 3px #999; cursor:pointer";
    btn.setAttribute("data-pyscript", "button");
    btn.addEventListener("click", replaceWithEditor.bind(btn, pySrc, wrapper, codeEnv));
    const label = document.createElement("i");
    label.style.cssText = "color:white;position:absolute; top:4px; left: 14px ";
    label.innerText = "LOAD";
    btn.appendChild(label);
    wrapper.appendChild(btn);
  });
}
function replaceWithEditor(pySrc, parent, env = null) {
  const editor = document.createElement("script");
  editor.type = "py-editor";
  if (env)
    editor.setAttribute("env", env);
  editor.textContent = pySrc;
  parent.innerHTML = "";
  parent.appendChild(editor);
}
addButtons();
