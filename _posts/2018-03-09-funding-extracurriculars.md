---
layout: post
title: Funding Your Extracurriculars
category: bigstory
image: funding.jpg
author: "Uday Shinghal, Yash Singh, Muskaan Bhambri"
excerpt: "Every semester, every student of IIT Roorkee each pays a certain amount towards the ‘Gymkhana Activities’ of the institute. This amount, which sums up to Rs. 6000 every academic year (Rs. 3000 every semester), is meant to cover the expenditure of all the extracurricular activities in the campus. With an approximate strength of students at IIT Roorkee being close to seven thousand, an amount of Rs. 6000 per student translates to an annual budget of over Rs. 4 crores."

---
Every semester, every student of IIT Roorkee each pays a certain amount towards the ‘Gymkhana Activities’ of the institute. This amount, which sums up to Rs. 6000 every academic year (Rs. 3000 every semester), is meant to cover the expenditure of all the extracurricular activities in the campus. With an approximate strength of students at IIT Roorkee being close to seven thousand, an amount of Rs. 6000 per student translates to an annual budget of over Rs. 4 crores. 

As substantial as the amount might seem, a perfect testimony to the importance of such an extensive budget was given by the former Director of IIT Roorkee, Dr. Pradipta Banerjee. During the orientation ceremony of the batch of 2016-17, he said, “Students, when you go out in public, you wear a suit to create an impression. Similarly, your academics might be your trousers and your shirt, but your extracurriculars play the role of your blazer and your tie.” 

With the dissolution of the Hobbies Club in the previous academic year, a Students’ Technical Council (organized along the lines of the Cultural Council and the Sports Council) emerged to cater to the demands of students involved in multiple technical clubs and groups. The Gymkhana fees, apart from the needs of the cultural, sports, and technical councils, also fulfils the requirements of various other campus activities that are pivotal to students’ everyday lives. For the very first time, a well-structured breakdown of the Gymkhana fees was released publicly last year by the former Convenor of SAC, Mr. Apurwa Sarwajit. While there have been some changes to the erstwhile allocation, the breakdown, in our belief, is still immensely convoluted and volatile in nature.

<!--- graph 1-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


<canvas id="myChart1" width="400" height="200"></canvas>
<script>
var ctx1 = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(ctx1, {
   	
   		type: 'horizontalBar',
        data: {
        	
        	labels: ["BRP", "DOSW (Misc. Students' Activities)", "Sports Council", "Students' Club", "Students' Technical Council (STC)", "Bhawan (Bachelor's/Married)","Cultural Council","Cinema Club","HEC","SPIC MACAY","SAC","ADOSW (Students' Wellness)", "ADOSW (Students' Activites","N.S.S"],
        	
        	datasets: [{
                label: '₹ per student',
            	data: [1700,1200,850,450,400,400,350,150,150,100,90,80,50,30],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#00CF21',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
        options:{
   		 	layout: {
        		padding: {
            		left: 120,
            		right: 0,
            		top: 0,
            		bottom: 0
           		}
           	},
        	scales: {
            	yAxes: [{	
            		gridLines: {
        				display:true,
        				color:"white",
					},
                	ticks: {
                   		beginAtZero:true,
                    	display: true,
    					fontFamily:'Open Sans',
    					fontStyle:'SemiBold',
    					fontcolor:"#4F4F4F",
                	}
            	}],
            	xAxes: [{
                    gridLines: {
        				display:true,
        				zeroLineColor:"white",
        				color:"white",	
        			},
                	ticks: {
                  		beginAtZero:true,
                   		display: true,
    					fontFamily: "Open Sans",
    					fontStyle:"SemiBold",
    					fontcolor:"#BDBDBD",
                		
                		callback: function(value, index, values) {
                       	return '₹' + value;
                        }
                	}
            	}]
            }
    }
});
</script>

![pic1](/images/posts/gymkhana1.png){: style="width:45%;height:auto"}
<br>

###  Bhawans

**Bhawan Replacement & Purchase (BRP): ₹1700/- per student per year**

**All Bachelors’ Bhawans: ₹400/- per student per year**

_Note: A majority of our gymkhana fees (28%) goes to the DOSW for Bhawan Replacement & Purchase (BRP) Fund. In addition to the BRP fund, an amount of ₹400/- is also paid to the respective bhawans for promoting cultural activities, paying salaries to temporary employees, and taking care of all miscellaneous activities in the bhawans._

A conversation with Mr. Aniket Jaiswal, the Cultural Secretary of Rajiv Bhawan, brought to the forefront that a major chunk of the allocated fund is consistently spent on the salaries of the temporary staff, and hence, little is left for bhawan activities. In addition to this, exorbitant expenses were incurred for Rajiv Bhawan’s last bhawan day, with food costing ₹650/- per plate (paid through the CCB account) and approximately ₹1,00,000 spent on decorations, tents, etc. Apart from bhawan inmates, only deans, institute guests, and the student senators are invited to such days.

Upon being asked about the significance of bhawan days, which usually prove to be quite an expense to the institute, Ms. Pragya Choudhary, the current Technical Secretary of Kasturba Bhawan, said, _“It is a way to make unresponsive people responsive and imbibe a sense of belongingness in the bhawan inmates.” She further termed the usage of the bhawan funds as “confidential”._

When asked about the usage of the BRP fund, Mr. Sambhav Jain (GS: Hostel Affairs), responded, _“The BRP funds are being used judiciously—but not uniformly—by the various bhawans, because the funds are controlled centrally and are allocated to a particular bhawan only on the request of the concerned council. This, in a sense, means that if a bhawan council is sufficiently proactive, they can access a huge portion of the funds and use it as per the bhawan’s needs.”_

<!--- graph 2-->
<canvas id="myChart2" width="400" height="200"></canvas>
<script>
var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
   	
   		type: 'horizontalBar',
    	data: {	
        	labels: ["Sarojini", "Rajendra", "Jawahar", "Cautley", "Govind", "Azad","Ravindra","Kasturba","RKB","Ganga","Rajiv", "Others"],
        	
        	datasets: [{
                label: '₹',
            	data: [644918,562493,533725,526504,459337,448443,365540,235481,233481,200675,186588,250000],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#00CF21',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
        options: {
   		 	layout: {
        		padding: {
                	left: 245,
                	right: 0,
                	top: 0,
                	bottom: 0
            	}
        	},
        	scales: {
            	yAxes: [{
            		gridLines: {
        		  	   display:true,
        		       color:"white",
					},
               		ticks: {
             		    beginAtZero:true,
                        display: true,
    				    fontFamily:'Open Sans',
    				    fontStyle:'SemiBold',
    				    fontcolor:"#4F4F4F",
                	}
            	}],
            		
            	xAxes: [{
            		gridLines: {
        				display:true,
        				zeroLineColor:"white",
        				color:"white",			
        				},
                	ticks: {
                    	beginAtZero:true,
                    	display: true,
    					fontFamily: "Open Sans",
    					fontStyle:"SemiBold",
    					fontcolor:"#BDBDBD",
                		
            			callback: function(value, index, values) {
                        	return '₹' + value;
                        }
                	}
            	}]
        	}
    }
});
</script>

![pic1](/images/posts/gymkhana2.png){: style="width:45%;height:auto"}


On the condition of anonymity, one of the current senators clearly vouched for the need of an alternate channel for the distribution of BRP funds since the current mode (through the DOSW office) usually ‘causes delays’.
<br>


###  Students’ Activities

**Misc. Students’ Activities (DOSW): ₹1200/- per student per year<br>
Students’ Activities (ADOSW): ₹50/-  per student per year** 

The funds act as buffer in cases where unanticipated disbursement has to be made. The activities falling under this section remain very motley and unpredictable. For instance, the fee for YourDost, the online counselling and emotional wellness platform, was paid from these funds. Also, in case a student seeks monetary help from college, if deemed worthy, these funds are used. If RFID-enabled cards, for example, are ever issued to the students, they shall be paid for through this channel.  
<br>


###  Sports Council

**Sports Council: ₹850/- per student per year**

While IITR boasts of one of the best sports facilities in the country, that there is a ‘preference’ for the NSO-registered students and those selected for institute teams is the complaint of a majority of the students. To counter this, Mr. Shubham Vij (GS: Sports Affairs) has promised the establishment of ‘beginners’ camps’ for every student, as each student pays the sports fee. He also urges students to participate in the intra-bhawan and inter-bhawan sports competitions and contribute to developing a healthy sporting culture at IITR. However, for students who want to try their hands at a new sport, lack of adequate equipment and support infrastructure still remain a major concern.


_Note: The breakdown varies with time and from sport to sport; therefore, we were unable to get a more detailed deconstruction of the funds. This will be covered in greater detail in a Watch Out article in the works, which will assess the intricacies of the sports culture at IITR._
<br>


###  Students’ Club

**Students’ Club: ₹450/- per student per year**

The Students’ Club accounts for 7.5% of the gymkhana fees. This is used in its entirety for the functioning and maintenance of the three units of the Students’ Club, namely, the Main Unit, the Alaknanda Unit and the Jawahar Unit, (which is soon to be transferred under Jawahar Bhawan Council’s jurisdiction as per Mr. Arpit Agrawal, the current Technical Secretary of Jawahar Bhawan). It has ample infrastructure in all its units, with the maximum obviously being in the Main Unit.

The Students’ Club has a total of 5 permanent employees, 6 temporary employees, and 1 part-time accountant. The permanent employees, of which 2 will be retiring soon, have _‘pretty high salaries’_, as stated by Mr. Suyash Vishnoi (Secretary: Students’ Club). The data obtained from the Annual Account Statement seems to support his claims, revealing that nearly 72% of the allocated funds go into paying salaries to the employees. Even after said retirement of personnel, this will remain the single largest guzzler of Students’ Club’s funds.
                   
The second largest chunk of the expenditure is on billiard games, comprising maintenance of the pool and snooker tables, and all other related equipment. It accounts for a mere 7.5%, however, in monetary terms, this translates to Rs. 3,17,000. At the same time, these games contribute to the income of the Students’ Club through the _‘coupons and bookings’_ which bring in about Rs. 3,75,000, and hence, they comfortably compensate for their expenditures.

The previous year saw the first time that the Students’ Club ran in deficit. Therefore, corpus funds from the last ten years were used to compensate for the same. This put pressure on these coffers and in the words of the Secretary, they will soon be exhausted. Mr. Vishnoi adds that the Club has been advised by the SAC to exhaust these before an increase in the share of Students’ Club in the Gymkhana fees can be considered. Additionally, there has been a consistent decrease in the said share from Rs. 550 to Rs. 500, and finally to Rs. 450 in the past 3 years. With the Chess team now regularly representing (and bringing in laurels) in various competitions like the Inter-IIT Sports Meet, we believe that the reconsideration of this fund is imminent. 


The Students’ Club has been proactive in increasing the usage of its paraphernalia by the student community. It has organised snooker workshops to increase participation by non-players as well as hired a chess coach to help the teams with their Inter-IIT sports meet preparations. The club also spends approximately Rs. 4,50,000 on the Annual Club Day and other activities, including the tournaments it holds round the year.

<!--- graph 3-->
<canvas id="myChart3" width="400" height="100"></canvas>
<script>
var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx3, {
   	
   		type: 'horizontalBar',
    	data: {
        	labels: ["Club Contribution (Gymkhana)", "Coupons Sales, Bookings etc.", "Interest by Bank", "Others"],
        	
        	datasets: [{
                label: '₹',
            	data: [3607000,375240,111690,6410],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#00CF21',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
        options: {
            title: {
                display: true,
                text: 'INFLOW'
            },
   		 	layout: {
        	    padding: {
               		left: 138,
               		right: 0,
               		top: 0,
               		bottom: 0
            	}
        	},
        	scales: {
                yAxes: [{    			
        			gridLines: {
        				display:true,
        				color:"white",
					},
                	ticks: {
                		beginAtZero:true,
                    	display: true,
    					fontFamily:'Open Sans',
    					fontStyle:'SemiBold',
    					fontcolor:"#4F4F4F",
                	}
            	}],
            		
            	xAxes: [{
            		gridLines: {
        			display:true,
        			zeroLineColor:"white",
        			color:"white",
        			},
             		ticks: {
                   		beginAtZero:true,
                   		display: true,
    					fontFamily: "Open Sans",
    					fontStyle:"SemiBold",
    					fontcolor:"#BDBDBD",
                		
               			callback: function(value, index, values) {
                        	return '₹' + value;
                            }
                		}
            		}]
        	}
        }
});
</script>

<br>



<canvas id="myChart3b" width="400" height="150"></canvas>
<script>
var ctx3b = document.getElementById("myChart3b").getContext('2d');
var myChart3b = new Chart(ctx3b, {
   	
   		type: 'horizontalBar',
    
    	data: {
        	
        	labels: ["Establishment (Salaries etc.)", "Furniture & Electrical Items", "Indoor Game Items", "Billiard Game Items", "News Paper & Magazine", "Music & Gardening","Computer Peripherals","Club Day & Any other"],
        	
        	datasets: [{
                label: '₹',
            	data: [3061492,92573,162656,316986,18955,61750,37795,479546],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#00CF21',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
        options: {
   		 	layout: {
        		    padding: {
                		left: 145,
                		right: 0,
                		top: 0,
                		bottom: 0
            		},
            },
            title: {
                        display: true,
                        text: 'EXPENDITURES',
            },
        	scales: {
            		yAxes: [{
            			gridLines: {
        					display:true,
        					color:"white",
						},
                		ticks: {
                   			beginAtZero:true,
                    		display: true,
    						fontFamily:'Open Sans',
    						fontStyle:'SemiBold',
    						fontcolor:"#4F4F4F",
                		}
            		}],
            		
            		xAxes: [{
            			gridLines: {
        					display:true,
        					zeroLineColor:"white",
        					color:"white",
        				},
                		ticks: {
                    		beginAtZero:true,
                    		display: true,
    						fontFamily: "Open Sans",
    						fontStyle:"SemiBold",
    						fontcolor:"#BDBDBD",
                		
                			callback: function(value, index, values) {
                        	return '₹' + value;
                           	}
                		}
            		}]
        	}
        }
});
</script>
<br>
![pic3](/images/posts/gymkhana3.png){: style="width:70%;height:auto"}

<br>

###  Students’ Technical Council

**Students’ Technical Council**: ₹400/- per student per year

<!--- graph 4-->
<canvas id="myChart4" width="400" height="150"></canvas>
<script>
var ctx4 = document.getElementById("myChart4").getContext('2d');
var myChart4	 = new Chart(ctx4, {
   	
   		type: 'horizontalBar',   
    	data: {
        	labels: ["Software Development Section", "Models and Robotics Section", "Inter IIT Tech Meet", "Artificial Intelligence and Electronics Section", "Entrepreneurship Development Cell", "SAE","Astronomy and Physics Club","Design Studio","ShARE"],
        	
        	datasets: [{
                label: '₹',
            	data: [500000,417000,400000,355000,290000,220000,200000,125000,100000],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#00CF21',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
        options: {
   		 	layout: {
        		    padding: {
                		left: 66,
                		right: 0,
                		top: 0,
                		bottom: 0
            		}
        	},
        	scales: {
                yAxes: [{	
            		gridLines: {
        				display:true,
        				color:"white",
					},
            		ticks: {
                 		beginAtZero:true,
                    	display: true,
    					fontFamily:'Open Sans',
    					fontStyle:'SemiBold',
    					fontcolor:"#4F4F4F",
                	}
            	}],	
            	xAxes: [{
            		gridLines: {
        				display:true,
        				zeroLineColor:"white",				
        				color:"white",
                    },
                	ticks: {
                		beginAtZero:true,
                		display: true,
    					fontFamily: "Open Sans",
    					fontStyle:"SemiBold",
						fontcolor:"#BDBDBD",

                		callback: function(value, index, values) {
                        	return '₹' + value;
                
                        }
                	}
            	}]
        	}
    }
});
</script>

![pic4](/images/posts/gymkhana4.png){: style="width:70%;height:auto"}


_“STC currently gets Rs. 400 per student of the total gymkhana fees. In the past years, the Council has had a splendid record, winning national and international competitions, and organizing workshops/lectures which have been a great source of technical knowledge in the campus. Given the promising potential of the Council, there is still scope for more efficient usage of increased funds, if provided. Also, in an effort to make groups more open, and for students to be able to bear the fruits of their gymkhana fees, the STC [had] launched an initiative that [sic] all STC groups will be listing all the resources/equipment purchased by them through STC Funds publicly. Any student can issue that resource/equipment just by writing an application to the respective group's secretary [sic]. If available, that resource or equipment can be issued to her/him.”_

**_-Mr. Punit Dhoot, (GS: Technical Affairs)_**

(Footnote: <span style="color:#0645AD">[Resources of STC](https://www.facebook.com/stciitr/posts/1580009178747703)</span>)

<br>
While Tinkering Lab and TIDES do not receive finances from the Gymkhana fees, SAE—in addition to the funds allocated from the gymkhana fees—receives monetary help from the Director’s Endowment Funds. The funds (shown in the graph above) were allocated at the request of the respective groups based on their judgements and needs. The breakdown, clearly, does not represent the institute’s or SAC’s perspective on the requirement of council groups.
<br><br><br>


###  Cultural Council 

**Cultural Council**: ₹350/- per student per year

<br>

<!--- graph 5-->
<canvas id="myChart5" width="500" height="300"></canvas>


<script>     
var barChartData = {
            labels: ['Music', 'Salary', 'Choreo', 'Audio', 'Office', 'Dramatics', 'Kshitij','Photog','CineSec','Promotions + Booking Venues','Last Semester Pending','Know-the-Cult Workshop','DebSoc','Fine Arts','Quizzing','Lights'],
            datasets: [{
                label: 'Repairs',
                backgroundColor: "#5DADE2",
                stack: 'Stack 0',
                borderWidth: .2,
                barThickness: .5,
                data: [
                    436333, 0,0,20000,0,0,0,0,0,0,0,0,0,0,0,0
                ]
                }, {
                label: 'One-Time Buy',
                backgroundColor:" #E74C3C ",
                stack: 'Stack 0',
                borderWidth: .2,
                barThickness: .5,
                data: [
                    239631,0,106326,49554,12865,0,0,29095,35141,0,0,0,0,0,0,0
                ]
                }, {
                label: 'Open House',
                backgroundColor: "#F4D03F",
                stack: 'Stack 0',
                borderWidth: .2,
                barThickness: .5,
                data: [
                    0,0,0,16209,0,0,0,8454,0,0,0,20127,16825,5149,0,0
                ]
                }, {
                label: 'Others',
                backgroundColor:"#00CF21",
                stack: 'Stack 0',
                borderWidth: .2,
                barThickness: .5,
                data: [
                    0,112800,0,0,51232,58855,47250,0,1989,29502,24103,0,0,0,1750,0

                ]
            },]
};
    
var ctx5 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx5, {
                type: 'horizontalBar',
                data: barChartData,
                options: {
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    title: {
                        display: false,
                        text: ''
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:true,
                                zeroLineColor:"white",    
                                color:"white",
                            },
                            ticks: {
                                beginAtZero:true,
                                display: true,
                                fontFamily: "Open Sans",
                                fontStyle:"SemiBold",
                                fontcolor:"#BDBDBD",
                        
                                callback: function(value, index, values) {
                                return '₹' + value;
                                }
                            },
                            stacked: true,
                        }],
                        yAxes: [{
                            gridLines: {
                                display:true,
                                zeroLineColor:"white",
                                color:"white",
                            },
                            ticks: {
                                beginAtZero:true,
                                display: true,
                                fontFamily: "Open Sans",
                                fontStyle:"SemiBold",
                                fontcolor:"#BDBDBD",
                            },
                            stacked: true
                        }]
                    }
                }
});
</script>
<br>
![pic5](/images/posts/gymkhana5.png){: style="width:65%;height:auto"}


_Note: Inter-IIT funds (₹8,50,000) have been removed from the complete budget to get a better visualisation of the graph._ 


The debate of making groups under the Cultural Council open to the entire campus populace has gained much momentum since its initiation; and has been able to garner the SAC’s attention as well. This is meant to make the resources purchased by the Cultural Council available to every campus resident fair and square.

This year, the SAC took multiple initiatives to increase the participation of the student community in cultural activities. All the groups came together to recruit again in the spring semester to provide another chance to students who might have missed it. The participation for the Inter-IIT Cultural Meet too was made open and transparent, and not limited to the respective groups. 

Despite all the steps taken, the analysis made by Watch Out clearly shows that the money spent on open house activities remains a mere fraction (< 4%) of the total expenditure till date. Also, with over 30% of the fund being outlaid through disbursements for the Inter-IIT Cultural Meet, little is left for professional workshops and in-house events, says Mr. Prajwal Bhatt, (GS: Cultural Affairs). He added that in the autumn semester, a large share of the funds spent were spent on repairs and purchases as a lot of the requirements of the Music Section, in terms of instruments and others, had been pending for quite some time and were promptly approved in the previous semester. All leftover funds, for the spring semester, will be used on 50-50 basis for purchases/repairs and open house events.

<br>
_“Budget is not really the constraint behind organising workshops for helping people perform better in FoS; building a personal bond is something which is extremely important. Like, people who performed in FoS brought gifts for the people in choreo section who helped them. That was a beautiful gesture, and moreover, building a personal bond helps pull off a better performance.”_ <br>
**_–Mr. Siddhant Bharadwaj, Dramatics Society_**  
<br><br>

Traditionally, the clubs/groups tend to spend a disproportionately large amount on in-house events but are reluctant to spend on open house events, such as the FoS, and this has continued into the current academic year. However, opening up of the sections’ resources to the campus junta was a bold move. Now, any student can use any resource of the Cultural Council by following the official channel and writing an application to the Faculty Advisor.


<br>
_“Music Section organised JAM-DAY a couple of weeks ago to see how many people actually show up; participation was approximately null. The issue being [that] on providing help and support, not everyone comes forward. When it comes to making instruments available to 8000 students, it’s a matter of concern when a student is a newbie. For example, repairing of a synthesizer key costs ₹3,000 approximately, so, at least some prior knowledge is extremely necessary. Maybe, the classes arranged by SAC will be useful. Also, IIT Bombay has got its own music room in every hostel—this is a great initiative which the bhawan councils should look forward to implementing.”_ <br>
**_–Mr. Rutuj Bhayani, Ad. Secretary, Music Section_** 
<br><br>

The efforts of the current council should not go unrecognised as it has taken a number of initiatives to promote the “cult” in the campus, including initiation of music and dance classes; and due to significant participation, it seems that there is a requirement of additional instructors with the monthly salary of each being Rs. 15,000 and Rs. 20,000 respectively. The groups have opened recruitments in both the semesters and resources have been made available to the masses. The open selections for the Inter-IIT Cultural Meet, we believe, was another bold move that was appreciated by the IITR community.
<br><br>


###  SAC

**SAC: ₹90/- per student per year**

The SAC fund is meant to pay for the celebrations of various festivals (Diwali, Holi, to name a few), as well as other activities under its prerogative—such as the organisation of the Freshers’ Week (and ensuing activities)—and the organisation of certain lectures by the SAC. Any added cost such as the publicity of the aforementioned activities through posters and flex printing is also included in this. Miscellaneous expenses under this comprise setting up water pots for the dogs in the campus to, in a way, avert them from drinking from water coolers meant for students. In simpler terms, it is upto the SAC to judiciously use the allocated funds as per their discretion.
<br><br>


###  Students’ Wellness

**Students’ Wellness: ₹80/- per student per year**

To ensure that the stay at IITR be a pleasant one, a specific office for issues related to the ‘wellness’ of students was established at the end of the last academic year. This, in essence, was a huge step taken to address issues of mental health at an institute like ours. SMP, SSP, and the Counselling Cell fall under the jurisdiction of this office, the one of ADOSW: Students’ Wellness. The office also takes care of the orientation ceremony of the freshman batch every year; and a separate budget for the ceremony is to be approved by an ‘adequate’ authority. With the establishment of this new office, we certainly expect some bold renovation and refinement of the existing system. 
<br><br>


###  Others

**Cinema Club:** ₹150/- per student per year<br>
**HEC:** ₹150/- per student per year<br>
**SPIC MACAY:** ₹100/- per student per year<br>
**NSS:** ₹30/- per student per year<br>

Individual initiatives like these take up the leftover fraction of the gymkhana fund for their own activities. Cinema Club, for example, uses its fund to showcase movies in the convocation hall for the students, while SPIC MACAY uses the money to organise events like Virasat to promote classical performing arts. Mr. Adarsh Goyal, a member of SPIC MACAY, says that these funds help them invite with a minimum recognition of Sangeet Natak Academy Award, preferably recipients of Padma Awards, and various international awards, for periodic events and workshops in IIT Campus and nearby education centres. He adds, _“Most of our money goes in the arrangement of these events and workshops, like artist payments, travel, accommodation, logistics, venue setup and audience outreach. All this is done to make students more aware about Indian and world heritage. This initiative is making education more holistic and meaningful as it is highlighting all that is abstract, subtle, inspiring and mystical in the world teaching one to look within oneself.”_

Speaking for the Himalayan Explorers’ Club, Mr. Manish Gupta, the secretary, says, _“HEC organises close to 30 short and long treks throughout the year with an average participation of 40 students. Registration of these treks is open-to-all, and a subsidy of around 500/- is given to each of the participants. Some expeditions are more extensive than the others, the recent one to Kalindikhal (at a height of 6000 metres) being an example, and take up more funds than the others. HEC also organises two skating camps in a year, along with a cycle-race, CAT (Confidence Assault Training) course, certain guest lectures and an annual Plantation Day. Winners of the cycle-race, the CAT course and for different adventurous categories are awarded during the Annual Club Day of the group. Funds are also used in buying and repairing the trekking equipments like tents, sleeping bags, mats, torches, cooking equipments, and skates. Other expenditures include refreshments for on-campus events, hospitality costs for the guests, and the printing costs of an annual magazine of the group. HEC also has three salaried-employees to look after the funds, the park, and the store of the club, and they are also being paid from the same funds.”_ He also cited the need for additional money, mentioning that HEC has taken a social initiative under rural development cell of ‘Mountain Cleaning Drive’, and it is looking for more funds to make this initiative successful.

 As far as NSS is concerned, Mr. Tejas Khadilkar, the current Secretary, mentions that most of their budget goes into the organisation of events like National Social Summit and Blood Donation Camps. In addition to these, he says that initiatives like cloth distribution drives, cleanliness drives, teaching classes, and various guest lectures take up a major chunk of their budget. He further adds, _“The constraint of budget keeps us from inviting high profile guests as we are barely able to fund their correspondingly high travel and hospitality expenses.”_
<br><br>


###  Our Two Cents

The gymkhana funds shape the direction in which our institute performs in the extracurricular vertical, and is a central piece in determining the overall character development and the completeness that the students graduating from here possess. With a few much-needed changes to the allocation of these funds, the gymkhana funds can adequately and appropriately address the needs of the upcoming batches of students. After careful consideration and elaborate conversations with a lot of people involved in the process, we’d humbly like to suggest the following improvements to the allocation.

First things first, we all are living in an era where justifying a virtual platform would be nothing but naive, and the Institute Gymkhana should definitely have a website of its own where all the activities centric to campus should be updated. Also, to ensure accountability and credibility, a more ‘human friendly’ annual report should be published by the SAC every academic year. 

Using the extracurricular fee to promote new technological advancements and a thriving culture of performing arts and fine arts should be the foremost priority of the institute. The current breakdown, however, does not reflect this notion. With 35% of the gymkhana fees being contributed to the repairs, purchases and operational activities of bhawan, aspiring for major reforms seems justified. Though a provision of making use of the cultural sections' resources is put into effect, the process seems latent because of the protocol involved. Also, with only handful students being the members of the performing sections, a large fraction of students who are willing to get involved in cultural activities is neglected; and to cater to their aspirations and interests, facilities shall (and need to) be setup in individual bhawans under the jurisdiction of the Cultural Secretary of that bhawan (Cautley Bhawan, for example, has set up their own Music Room recently).

Another major issue was that 35% of the Cultural Council Budget and 14% of the Technical Council Budget went into reimbursements of respective Inter IIT Meets. While expenditures of this nature are extremely necessary, whether these be done at the expense of the gymkhana funds allocated to these societies is a question worth considering. The Inter IIT Sports Meet, in contrast, is funded by the MHRD completely. While it is still early days to expect the same for the former two, steps in this direction shall certainly free up funds for promotion of better facilities in-house for these councils.

As a closing note, we also firmly believe that hiring an expert who could analyse the needs of the various sections and societies in the campus would help us allocate the extracurricular fees more effectively. Unarguably, this breakdown is extremely important to the student community, and a judicious use of this amount shall certainly help our cause.

<br>
_Notes:_ <br>
1. _Watch Out gathered all the data and statements after meeting the respective secretaries of various bhawans or the councils involved. In case of any discrepancies, please reach out to us so that we can rectify the same._ <br>
2. _The official notice for the gymkhana fee breakdown can be found <span style="color:#0645AD">[here](https://drive.google.com/file/d/1D3VWG2uFI7B6GwqIR9GCRukuFenuQxOY/view)</span>._


