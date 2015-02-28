//bio object
var bio = {
	"name": "Faraz Patankar",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "09819819169",
		"email": "farazpatankar@gmail.com",
		"github": "farazpatankar",
		"twitter": "farazpatankar13",
		"location": "Mumbai"
	},
	"welcomeMessage": "Welcome To My Webpage",
    "skills": ["HTML", "CSS", "Javascript"],
	"biopic": "images/fry.jpg",
	"display" : function () {
	//code for display bio
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

	//code for display skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
	}

	//code for display bio.contacts
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
	}
};
//calling display function for bio
bio.display();

//education object
var education = {
    "schools": [
        {
            "name": "Ryan International School",
            "location": "Kharghar",
            "degree": "Twelfth Grade",
            "majors": ["Science"],
            "dates": 2010,
            "url": "http://www.ryaninternational.org/rgskharghar/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud304"
        }
    ],
    "display": function () {
        // display schools
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var name = HTMLschoolName.replace("%data%", education.schools[school].name);
            name = name.replace("#", education.schools[school].url);

            var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $('.education-entry:last').append(name + degree);

            var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $('.education-entry:last').append(dates);

            var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $('.education-entry:last').append(location);
            for (major in education.schools[school].majors) {
                var theMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $('.education-entry:last').append(theMajor);
            }
        }

        // display online courses
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                $('#education').append(HTMLschoolStart);
                var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                title = title.replace("#", "images/certificate.pdf");
                var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                $('.education-entry:last').append(title + school);
                var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                $('.education-entry:last').append(onlineDates);
                var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                url = url.replace("#", education.onlineCourses[course].url);
                $('.education-entry:last').append(url);
            }
        }
    }
};
//calling display function for education
education.display();


//work object
var work = {
    "jobs": [
        {
        "employer": "Freelance",
        "title": "Graphic Design and Web Development",
        "location": "Bahrain",
        "dates": "2010 - present",
        "description": "Various jobs including designing websites and business cards"
        },
    ],
    "display": function () {
    //code for display work
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        }
    }
};
//calling display function for work object
work.display();


//project object
var projects = {
    "projects": [
    {
    "title": "Page Mock",
    "dates": "January 2015 - February 2015",
    "description": "Create a website based off a designers mockup",
    "image": ["images/197x148.gif"]
    }
    ],
    "display": function () {
        for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].image.length > 0) {
                for (image in projects.projects[project].image) {
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
//calling display function for project object
projects.display();

$(document).click(function(loc) {
    var x = loc.pageX
    var y = loc.pageY

    logClicks(x, y)
});

$("#mapDiv").append(googleMap);

var twitterFeed = {
    display: function twitterDisplay() {
        var twitterFeedDiv = '<a class="twitter-timeline" href="https://twitter.com/FarazPatankar13" data-widget-id="570319524751093760">Tweets by @FarazPatankar13/a>' + '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?' + "'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+" + '"://platform.twitter.com/widgets.js' + '";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
        $("#twitterFeed").append(twitterFeedDiv);
    }
}
twitterFeed.display();