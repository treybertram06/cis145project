//start with dark mode (obviously)
let isLightTheme = false;
//incomplete cells should be visible as default
let incompletedHidden = false;

function toggleTheme() {
    //get the page <style> 
    const themeStyle = document.getElementById('theme-style');
    //if isLightTheme == true then..
    if (isLightTheme) {
        //set our style equal to light mode colors
        themeStyle.textContent = `
            body {
                background-color: hsl(0, 0%, 20%);
                color: hsl(0, 0%, 80%);
            }
            #pageTitle {
                color: hsl(0, 0%, 80%);
            }
            table tr:nth-child(even) {
                background-color: hsl(0, 0%, 25%);
            }
            th {
                background-color: hsl(0, 0%, 13%);
            }
            tfoot {
                background-color: hsl(0, 0%, 13%);
            }
            a:link {
                color: hsla(0, 100%, 50%, 0.75);
            }
            a:visited, a:hover {
                color: hsla(0, 100%, 50%, 0.5);
            }
            .photoGallery figcaption {
                color: hsl(0, 0%, 80%);
            }
            .contactForm {
                background-color: hsl(0, 0%, 10%);
            }
            .contactForm label {
                color: hsl(0, 0%, 80%);
            }
            .contactForm input,
            .contactForm textarea,
            .contactForm select {
                background-color: hsl(0, 0%, 20%);
                color: hsl(0, 0%, 80%);
                border: 1px solid hsl(0, 0%, 40%);
            }
            .contactForm button {
                background-color: hsla(0, 100%, 50%, 0.75);
                color: hsl(0, 0%, 80%);
            }
            .contactForm button:hover {
                background-color: hsla(0, 100%, 50%, 0.5);
            }
        `;
    } else {
        //else set it equal to our dark mode theme
        themeStyle.textContent = `
            body {
                background-color: hsl(0, 0%, 95%);
                color: hsl(0, 0%, 20%);
            }
            #pageTitle {
                color: hsl(0, 0%, 20%);
            }
            table tr:nth-child(even) {
                background-color: hsl(0, 0%, 90%);
            }
            th {
                background-color: hsl(0, 0%, 85%);
            }
            tfoot {
                background-color: hsl(0, 0%, 85%);
            }
            a:link {
                color: hsla(0, 100%, 30%, 0.75);
            }
            a:visited, a:hover {
                color: hsla(0, 100%, 30%, 0.5);
            }
            .photoGallery figcaption {
                color: hsl(0, 0%, 20%);
            }
            .contactForm {
                background-color: hsl(0, 0%, 98%);
            }
            .contactForm label {
                color: hsl(0, 0%, 20%);
            }
            .contactForm input,
            .contactForm textarea,
            .contactForm select {
                background-color: hsl(0, 0%, 100%);
                color: hsl(0, 0%, 20%);
                border: 1px solid hsl(0, 0%, 70%);
            }
            .contactForm button {
                background-color: hsla(0, 100%, 30%, 0.75);
                color: hsl(0, 0%, 95%);
            }
            .contactForm button:hover {
                background-color: hsla(0, 100%, 30%, 0.5);
            }
        `;
    }
    //change isLightTheme to the opposite what it is now
    isLightTheme = !isLightTheme;
}

function hideIncompleteProjects() {
    //swap the value
    incompletedHidden = !incompletedHidden;
    //set rows array equal to every tr
    const rows = document.querySelectorAll('table tbody tr');
    //for each row in rows execute the function
    rows.forEach(row => {
        //the 'Completed?' column is the 3rd one
        const completedCell = row.cells[2]; 
        if (incompletedHidden) {
            //if that cell == 'No' then dont display it
            if (completedCell.textContent.trim() === 'No') {
                //set display to none
                row.style.display = 'none';
            }
        } else {
            //if that cell == 'No' then dont display it
            if (completedCell.textContent.trim() === 'No') {
                //reset display to default
                row.style.display = 'table-row';
            }
        }

    });
    
}
