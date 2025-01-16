function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}



function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}


function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}

function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);


$(document).ready(function() {
    $('.social1, .social2, .social3').on('click', function() {
      $(this).addClass('button-clicked');
    });
  });



// Data for the projects (can be loaded from an API or JSON)
const projects = [
    {
        id: 1,
        title: "FCEC",
        description: "A corporate website meticulously developed using advanced techniques.",
        link: "https://www.fcec.sa/"
    },
    {
        id: 2,
        title: "FC ECO",
        description: "A bilingual website focusing on seamless navigation and optimized performance.",
        link: "https://www.fceco.sa/"
    },
    {
        id: 3,
        title: "Ayed Al Qarni Excellence Awards",
        description: "A responsive bilingual website for enhanced user engagement.",
        link: "https://www.aqeaw.com/"
    }
];

// Attach event listeners to work cards
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = parseInt(card.getAttribute('data-project-id'));
        const project = projects.find(p => p.id === projectId);
        if (project) {
            openProjectModal(project);
        }
    });
});

// Open the modal with project details
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    modal.querySelector('#modal-title').innerText = project.title;
    modal.querySelector('#modal-description').innerText = project.description;
    modal.querySelector('#modal-link').href = project.link;
    modal.style.display = 'flex';
}

// Close the modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}
