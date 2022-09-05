window.addEventListener('load', () =>
{
    const form = document.querySelector("#new_card_form");
    const input = document.querySelector("#new_card");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();

        const task = input.value;

        if (!task)
        {
            alert("please fill out task");
            return ;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("action");

        task_el.appendChild(task_action_el);

        const button_edit = document.createElement("button");
        button_edit.classList.add("edit");
        button_edit.innerHTML = "Edit";

        const button_delete = document.createElement("button");
        button_delete.classList.add("delete");
        button_delete.innerHTML = "Delete";

        task_action_el.appendChild(button_edit);
        task_action_el.appendChild(button_delete);

        list_el.appendChild(task_el);
        input.value = "";

        button_edit.addEventListener('click', () =>
        {
            if (button_edit.innerText.toLowerCase() == "edit")
            {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                button_edit.innerHTML = "Save";
            }
            else
            {
                task_input_el.setAttribute("readonly", "readonly");
                button_edit.innerHTML = "Edit";
            }
        });

        button_delete.addEventListener('click', () =>
        {
            task_el.remove();
        });
    })
})