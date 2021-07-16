
            const body = document.querySelector("body")

            const elemento = document.createElement("nav")
            elemento.classList.add("menu")
            body.appendChild(elemento)

            const h1 = document.createElement("h1")
            h1.innerHTML = "Sociais"
            elemento.appendChild(h1)

            const link = document.createElement("a")
            link.href = "https://github.com/smlsilva"
            link.target = "_blank"
            elemento.appendChild(link)

            const img_1 = document.createElement("img")
            img_1.classList.add("github")
            img_1.src = "./img/Octocat.png"
            img_1.alt = "github"
            link.appendChild(img_1)

            const link_2 = document.createElement("a")
            link_2.href = "https://www.linkedin.com/in/samuel-silva-1a0471217/"
            link_2.target = "_blank"
            elemento.appendChild(link_2)

            const img_2 = document.createElement("img")
            img_2.classList.add("linkedin")
            img_2.src = "./img/linkedin.png"
            img_2.alt = "linkedin"
            link_2.appendChild(img_2)
