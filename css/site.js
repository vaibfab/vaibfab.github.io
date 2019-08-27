// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});
$('ul.nav').find('a').click(function () {
    var $href = $(this).attr('href');
    var $anchor = $('#' + $href).offset();
    window.scrollTo($anchor.left, $anchor.top);
    return false;
});

function loadSkills(skill) {
    if (skill === 1) {
        document.getElementById('rowOne').style.backgroundColor = "#A9F5F2";
        document.getElementById('rowTwo').style.backgroundColor = "";
        document.getElementById('rowThree').style.backgroundColor = "";
        document.getElementById('rowFour').style.backgroundColor = "";
        document.getElementById('skillDiv').innerHTML = '<ul><li>C#</li><li>C++ (managed and unmanaged)</li><li>C</li><li>Python</li><li>Microsoft SQL Server</li><li>NoSQL</li><li>MySQL</li><li>T-SQL</li> <li>LINQ</li></ul >';
    }
    else if (skill === 2) {

        document.getElementById('rowOne').style.backgroundColor = "";
        document.getElementById('rowTwo').style.backgroundColor = "#A9F5F2";
        document.getElementById('rowThree').style.backgroundColor = "";
        document.getElementById('rowFour').style.backgroundColor = "";
        document.getElementById('skillDiv').innerHTML = '<ul><li>HTML 5</li><li>ASP.NET Core MVC</li><li>JavaScript</li><li>jQuery</li><li>React.js</li><li>CSS3</li><li>Bootstrap</li><li>XML</li><li>PHP</li></ul>';
    }
    else if (skill === 3) {
        document.getElementById('rowOne').style.backgroundColor = "";
        document.getElementById('rowTwo').style.backgroundColor = "";
        document.getElementById('rowThree').style.backgroundColor = "#A9F5F2";
        document.getElementById('rowFour').style.backgroundColor = "";
        document.getElementById('skillDiv').innerHTML = '<ul><li>Visual Studio</li><li>SQL Server Management Studio</li><li>Git</li><li>TFS</li><li>VSTS</li><li>PowerShell</li><li>PyCharm</li><li>Jupyter Notebook</li><li>MySQL Workbench</li><li>Azure DevOps</li><li>Adobe XD</li><li>IIS</li></ul>';
    }
    else if (skill === 4) {

        document.getElementById('rowOne').style.backgroundColor = "";
        document.getElementById('rowTwo').style.backgroundColor = "";
        document.getElementById('rowThree').style.backgroundColor = "";
        document.getElementById('rowFour').style.backgroundColor = "#A9F5F2";
        document.getElementById('skillDiv').innerHTML = '<ul><li>Microsoft Azure</li><li>Entity Framework Core</li><li>Micro services</li><li>WCF</li><li>WPF</li><li>Unix Shell Scripting</li><li>Docker Containers</li><li>DevOps</li</ul>';
    }
    else {
        document.getElementById('skillDiv').innerHTML = 'Cant load Skills';
    }
}
var $fab = $('#fab');
var isExpanded = false;

$fab.on('click', function () {
    if (!isExpanded) {
        $fab.addClass('is-expanding');

        setTimeout(function () {
            $fab.find('.fa').removeClass('fa-plus').addClass('fa-close expand-close');
            $fab.removeClass('is-expanding').addClass('expanded');
            isExpanded = true;
            $fab.trigger('expanded');
        }, 500);
    }
});

$fab.on('click', '.expand-close', function (e) {
    var $close = $(this);
    e.stopPropagation();
    $fab.find('.inner-content').remove();
    $fab.removeClass('expanded').addClass('is-closing');

    setTimeout(function () {
        $close.removeClass('fa-close pull-right expand-close').addClass('fa-plus');
        $fab.removeClass('is-closing');
        isExpanded = false;
    }, 500);
});

$fab.on('expanded', function () {
    $fab.append('<h1 class="inner-content">Content<h1/>');
});
