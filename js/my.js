function changesrcImg(idImage, number) {
    let dataName = document.getElementById(idImage).getAttribute("data-name");
    if (dataName === 'funny') {
        switch (number) {
            case 1:
                document.getElementById(idImage).src = 'image/monkey_part2x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src = 'image/monkey_part2x2.jpg';
                break;
            case 3:
                document.getElementById(idImage).src = 'image/monkey_part2x3.jpg';
                break;
        }

        document.getElementById(idImage).setAttribute("data-name", 'monkey');
        checkWin()

    } else if (dataName === 'monkey') {

        switch (number) {
            case 1:
                document.getElementById(idImage).src = 'image/panda_swap_part3x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src = 'image/panda_swap_part3x2.jpg';
                break;
            case 3:
                document.getElementById(idImage).src = 'image/panda_swap_part3x3.jpg';
                break;

        }

        document.getElementById(idImage).setAttribute("data-name", 'panda');
        checkWin()
    } else {
        switch (number) {
            case 1:
                document.getElementById(idImage).src = 'image/funny-cat1_part1x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src = 'image/funny-cat1_part1x2.jpg';
                break;
            case 3:
                document.getElementById(idImage).src = 'image/funny-cat1_part1x3.jpg';
                break;
        }
        document.getElementById(idImage).setAttribute("data-name", 'funny');
        checkWin()
    }

}

function checkWin() {
    let dataNameImg1 = document.getElementById('img1').getAttribute("data-name");
    let dataNameImg2 = document.getElementById('img2').getAttribute("data-name");
    let dataNameImg3 = document.getElementById('img3').getAttribute("data-name");

    if (dataNameImg1 === dataNameImg2 && dataNameImg2 === dataNameImg3) {
        document.getElementById('content').style.border = '2px solid red';
    } else {
        document.getElementById('content').style.border = '2px solid white';
    }
}