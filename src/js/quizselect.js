const QUIZLENGTH = 4;

const ORGINFO = [

    {
        name: "Teach For America",
        info: "We're a non-profit, leadership development organization that helps young leaders use their talents to end educational inequality in America. In the long-term, our network of more than 50,000 leaders continue to channel their collective talents to create the systemic-level change needed for kids across the country. As a full-time teacher, your salary typically range from $33k-$58k and are entitled to medical benefits, depending on your location. This program is a great fit for strong leaders & achievers with excellent organizational abilities, interpersonal skills, and deep belief in the potential of all children.",
        website: "https://www.teachforamerica.org"
    },

    {
        name: "Peace Corps",
        info: "Peace Corps is a catalyst for grassroots international development and cultural exchange powered by volunteers ready to use their energy, ingenuity, and skills to work towards reducing inequality and creating opportunities in communities in over 60 countries. After new members complete their 2-3 months pre-service training, they are able to work in several focus areas of service with a living stipend, health & dental care benefits, housing, student loan deferment, and the chance to earn a TEFL certificate. This program is a great fit for students that are adaptable, respectful, open-minded, disclipined, and work well on a team.",
        website: "https://www.peacecorps.gov/"
    },

    {
        name: "Operation AmeriCorps",
        info: "A collaborative partnership between the City of Orlando, Orange Country Public Schools, and After-School All-Stars, the goal of Operation AmeriCorps is to use national service to ensure high school graduation and a post-high school pathway for targeted students towards the paths of military enlistment, 4-year university, trade/technical school, or employment. For one year, members will work with students and be responsible for promoting academic, social, and personal success. Members are paid a salary a living allowance at or above $13,500 a year, along with the options of Loan Forbearance, Child Care allowances, and upon completion of the program, members are eligible for a the Segal Education Award valued at the current amount of the Pell Grant.",
        website: "http://www.cityoforlando.net/fpr/operation-americorps/'target='_blank'>Visit Website</a></strong>"
    },

    {
        name: "National Health Corps",
        info: "National Health Corps has worked to expand access to health care and health education in under-served communities for more than 20 years. For 10 ½ months, members will work to provide an array of health screenings and wellness education to those in need in addition for ways individuals in communities can find resources and benefits to promote a healthy, sustainable life. The volunteer members also receive benefits such as childcare assistance, student loan forbearance, health coverage, a $13,992 stipend over the course of their service, and a $5920.00 education award upon completion of their term. A great fit for individuals who are interested addressing health disparities with a perspective informed by experience in low-income communities, and system challenges of poverty and racism.",
        website: "http://nationalhealthcorps.org/"
    },

    {
        name: "Orlando Cares",
        info: "Orlando Cares works to address community issues through volunteerism. Volunteers serve at City Hall or at local nonprofit organizations to develop programs to recruit, screen, train, engage, and monitor volunteers from the community. Mentor students to their improve wellness, science & reading literacy in K-5 schools and preschools. Members able to dedicate a year of full-time service, will have benefits including a living allowance, healthcare benefits, relocation allowance, and a $5,815 Segal Education Award or a $1,500 cashh stipend at the end of the service year. This program is a great program for individuals with a passion to promote youth education and development with a devotion to community service.",
        website: "https://www.cityoforlando.net/oca/orlando-cares/"
    },

    {
        name: "City Year",
        info: "CityYear is a gap year program from AmeriCorps that invites young leaders to serve 11 months as a tutor and mentor to students Central Florida in K-12 schools and communities. Members receive multiple benefits including a bimonthly living stipend of $630, health insurance, and a $6000 Segal Education award at the end of the service year along with eligibility to many other scholarships. It is a great opportunity for servant leaders interested in civic engagement and community education promotion.X",
        website: "https://www.floridastateparks.org/flcc"
    },

    {
        name: "Florida Conservation Corps",
        info: "Florida Conservation Corps provides hands-on service learning opportunities designed to develop leaders in the fields of cultural preservation, land management, and regional outreach through their A.N.T, T.R.E.C, & R.O.A.R programs. Full-time volunteer members commit themselves to 11 months and 1,700 hours of service (~40hrs/week) and receive benefits including a monthly living allowance, health insurance, childcare assistance, free access to state parks, student loan forbearance, and upon completion of their service receive a Segal Education Award Volunteers develop confidence, knowledge and abilities necessary to become better environmentalists, conservationists, and stewards of their community and environment.",
        website: "https://www.floridastateparks.org/flcc"
    },

    {
        name: "National Civilian Community Corps",
        info: "AmeriCorps National Civilian Community Corps & FEMA Corps is a full-time, residential, team-based program for young adults between 18-24 that runs for 10-12 months compromised of teams of 8-10 members. This organization focuses on disaster relief, infrastructure improvement, environmental stewardship, and urban and rural development. Members receive benefits including a living allowance of roughly $90 a week before taxes and team leaders receive $250 dollars before taxes. Members also receive lodging, transportation, uniform, meals, and health-care benefits at no cost. Federal student loan forbearance, childcare allowance, and up to 9 college credit hours. This is a great opportunity for passionate service-minded individuals who wish to travel across the country.",
        website: "https://www.nationalservice.gov/programs/americorps/americorps-programs/americorps-nccc"

    },

    {
        name: "Orlando Partnership for School Success",
        info: "Orlando-Partnership for School Success is a collaborative partnership between the City of Orlando, Orange County Public School and After-School All-Stars. The mission of the project is to expand academic and social supports for at-risk youth in high poverty neighborhoods during the school day, after school and in summer. Each volunteer is assigned 40 children for whom they will be responsible for promoting their academic, social, and personal success for one year. Best suited for bilingual, community driven individuals. Volunteers receive benefits including a bi-weekly living allowance of $562.50, healthcare benefits, childcare allowance for active members, loan forbearance, and eligibility for the Segal Education Award valued at the current amount of the Pell Grant in that year. Great for individuals with a strong desire to serve with a committment to diversity, teamwork, self-development, and desire to work with youth. Billingual individuals skilled within the Microsoft Office Suite is a plus.",
        website: "http://www.cityoforlando.net/fpr/operation-americorps/"
    },

    {
        name: "Public Allies",
        info: "Public Allies Central Florida is a 10-month long full-time apprenticeship at a local nonprofit as well as a leadership development program. Best for individuals who want to promote social justice and social equity by engaging with their community. Members receive a $1,500 stipend, access to childcare, and eligibility for the Segal Education Award. This program is best suited for individuals with a passion for service-minded individuals who wish to serve marginalized people within their local community.",
        website: "http://www.publicallies.org/"
    }

];
// Bonnieblue would like a dropdown menu for the additional matches for the user
var Quiz = function () {
    var self = this;
    this.init = function () {
        self._bindEvents();
    }

    this._selectAnswer = function ($choice, $question) {
        //Disable all choices
        $question.find(".quiz-choice").removeClass("active");
        $question.find(".quiz-choice").addClass("disabled");

        //Activate selected choice
        $choice.removeClass("disabled");
        $choice.addClass("active");
    }

    //Returns true if each question has a selected response
    this._isComplete = function () {
        let answersChosen = 0;
        $("ul[data-quiz-question]").each(function () {
            if ($(this).find(".quiz-choice.active").length > 0) {
                answersChosen++;
            }
        });
        return (answersChosen >= QUIZLENGTH);
    }

    //Returns array of user responses
    this._tallyResponses = function () {
        let choiceList = new Array();
        $("ul[data-quiz-question]").each(function () {
            choiceList.push($(this).find(".quiz-choice.active").data("choice-value"));
        });
        return choiceList;
    }

    this._calcResult = function () {
        // orgsAnswers[0] = Teach for America
        const teachForAmerica = new Array(["a", "b", "c", "d", "e"], ["a", "b", "e"], ["c", "e"], ["a"]);
        // orgsAnswers[1] = Peace Corps
        const peaceCorps = new Array(["a", "b", "c", "d", "e"], ["b", "d", "e", "f"], ["b", "c", "d", "e"], ["a", "b", "d", "f"]);
        // orgsAnswers[2] = Operation AmeriCorps
        const opAmeriCorps = new Array(["a"], ["e"], ["c"], ["a"]);
        // orgsAnswers[3] = National Health Corps
        const natHealthCorps = new Array(["a", "b", "c", "d", "e"], ["b"], ["d", "e"], ["d"]);
        //orgsAnswers[4] = Orlando Cares
        const orlandoCares = new Array(["a", "b", "c", "d", "e"], ["b", "e"], ["c", "e"], ["a", "f"]);
        //orgsAnswers[5] = City Year
        const cityYear = new Array(["a", "b", "c", "d", "e"], ["b", "e"], ["c", "e"], ["a"]);
        //orgsAnswers[6] = Florida Conservation Corps
        const flCC = new Array(["a", "b", "c", "d", "e"], ["b", "c", "f"], ["a"], ["b"]);
        //orgsAnswers[7] = National Civillian Community Corps
        const natCCC = new Array(["a", "b", "c", "d", "e"], ["a", "b", "f"], ["a", "b"], ["b", "f"]);
        //orgsAnswers[8] = Orlando Partnership for School Success
        const opass = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["c", "e"], ["a", "f"]);
        //orgsAnswers[9] = Public Allies
        const publicAllies = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["c", "e"], ["c", "f"]);

        const orgsAnswers = new Array(teachForAmerica, peaceCorps, opAmeriCorps, natHealthCorps, orlandoCares, cityYear, flCC, natCCC, opass, publicAllies);

        const userChoices = this._tallyResponses();

        let finalPoints = new Array(10).fill(0);

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        function addPoints(choice, j) {
            for (var i = 0; i < orgsAnswers.length; i++) {
                if (orgsAnswers[i][j].includes(choice)) {
                    finalPoints[i]++;
                }
            }
        }

        function shuffledMatchList(a) {
            var i = 0,
                maxList = new Array(),
                max = 0;

            for (i = 0; i < a.length; i++) {
                if (a[i] > max) {
                    max = a[i];
                }
            }

            for (i = 0; i < a.length; i++) {
                if (a[i] == max) {
                    maxList.push(i);
                }
            }

            return shuffle(maxList);
        }

        userChoices.forEach(addPoints);

        return shuffledMatchList(finalPoints);
    }

    this._showResult = function () {
        let $resultBox = $(".result");

        let resultList = self._calcResult();


        $resultBox.addClass("resultComplete jumbotron");
        $resultBox.html("<h1 class='mb-4'><p>Here is your result!</p> <p>You matched with <i>" + ORGINFO[resultList[0]].name + "</i></p> </h1> <p>" + ORGINFO[resultList[0]].info + '</p><p class="text-center"><a class="my-3 mx-auto btn btn-primary btn-lg" href="' + ORGINFO[resultList[0]].website + '" target="_blank"><strong>Visit Website</strong></a></p>');

        const resultToString = () => {
            var myStr = '';
            for (let i = 1; i < resultList.length; i++) {
                myStr += '<li ><a class="collapsed" href="#collapseInfo-' + i + '"data-toggle="collapse" role="button" aria-expanded="false" id="info-' + i + '"><h4><strong><u>' + ORGINFO[resultList[i]].name + '</u></strong></h4></a></li><p class="collapse text-center" id="collapseInfo-' + i + '">' + ORGINFO[resultList[i]].info + '<br><a class ="btn btn-primary btn-lg my-3 mx-auto text-center" href="' + ORGINFO[resultList[i]].website + '" target="_blank"><strong>Visit Website</strong></a></p>';

            }
            return myStr;
        }
        if (resultList.length > 1) {
            $resultBox.append('<hr class="my-4"><h2><strong> You also matched with:</strong></h2> <ul id="accordion">' + resultToString() + '</ul><br>');
        }
        $resultBox.append('<hr class="my-4"><p class="text-center">Schedule a consultation with Rahsaan Graham to learn more about your program and many others. Be sure to screenshot your result!</p><p class="text-center"><a class="btn btn-primary btn-lg" href="mailto:Rahsaan.Graham@ucf.edu?subject=AmeriCorps Appointment.&body=I got ' + ORGINFO[resultList[0]].name + ' as my result. Could I schedule an appointment to learn more about it and my other options.""><strong>Schedule Consultation</strong></a></p>');
        //Animated scroll
        $("body, html").animate({
            scrollTop: (($resultBox).offset().top - 25) //25px for visual padding
        }, 500);
    }

    this._bindEvents = function () {
        let jumboList = new Array();
        $(".jumbotron").each(function () {
            jumboList.push($(this));
        });

        $(".quiz-choice").on("click", function () {
            let $choice = $(this);
            let $question = $choice.closest("ul[data-quiz-question]");
            self._selectAnswer($choice, $question);
            if (self._isComplete()) {
                self._showResult();
                return;
            }
            //Animated scroll to next Jumbotron element
            $("body, html").animate({
                scrollTop: (jumboList[parseInt($question.data("quiz-question"))]).offset().top - 25
            }, 500);
        });
    }
}

var quiz = new Quiz();
quiz.init();