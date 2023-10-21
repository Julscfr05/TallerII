document.addEventListener("DOMContentLoaded", function () {
    function DC() {
        var table = document.getElementById("table");

        var celda = [
            { row: 0, col: 0, content: "<img src='../resources/arbol.png' alt='Imagen' />", rowSpan: 3, colSpan: 1 },
            { row: 0, col: 1, content: "<img src='../resources/daves.png' />", rowSpan: 1, colSpan: 1 },
            { row: 0, col: 2, content: "<h3>Thursday, October 11, 2001</h3>", rowSpan: 1, colSpan: 1 },
            { row: 3, col: 0, content: "<img src='../resources/titanic.png' alt='Imagen' />", rowSpan: 1, colSpan: 1 },
            { row: 3, col: 1, content: "This is just a corny way of showing you how a table can organize the layout of a web page. Designing a prototype by sketching on a piece of paper is a good place to start. You need to, however, have the skills to transfer that concept to HTML. Tables help you organize it.", rowSpan: 1, colSpan: 2 },
            { row: 1, col: 0, content: "<h1>Sample Web Page Table Layout</h1>", rowSpan: 1, colSpan: 2 },
            {
                row: 2,
                col: 0,
                content:
                    "<nav><a href='#'>HOME   |   </a><a href='#'>   DOWNLOAD   |   </a><a href='#'>   SITE INDEX   |   </a><a href='#'>   SEARCH   |   </a><a href='#'>   CONTACT US</a></nav>",
                rowSpan: 1,
                colSpan: 3,
            },
            { row: 3, col: 2, content: "<img src='../resources/frameFree.png' alt='Imagen' />", rowSpan: 1, colSpan: 1 },
        ];

        for (var i = 0; i < 4; i++) {
            var row = table.insertRow(i);

            for (var j = 0; j < 4; j++) {
                var cuad = row.insertCell(j);

                if (j < 3) {
                    var config = celda.find(function (config) {
                        return config.row === i && config.col === j;
                    });

                    if (config) {
                        cuad.rowSpan = config.rowSpan;
                        cuad.colSpan = config.colSpan;
                        cuad.innerHTML = config.content;
                    }
                }
            }
        }

        var eliminarCeldas = [
            { row: 1, col: 2 },
            { row: 2, col: 1 },
            { row: 2, col: 2 },
            { row: 3, col: 3 },
            { row: 0, col: 3 },
        ];

        eliminarCeldas.forEach(function (cell) {
            var eliminarFila = table.rows[cell.row];
            eliminarFila.deleteCell(cell.col);
        });

        var unirCeldas = table.rows[0].insertCell(3);
        unirCeldas.innerHTML = "<a href='#'>text Only</a>";
    }

    DC();
});