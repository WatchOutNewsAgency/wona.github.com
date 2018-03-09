---
layout: post
title: Funding Your Extracurriculars
category: big story
image: funding.jpg
author: "Uday Shinghal, Yash Singh, Muskaan Bhambri"
excerpt: "Every semester, every student of IIT Roorkee each pays a certain amount towards the ‘Gymkhana Activities’ of the institute. This amount, which sums up to Rs. 6000 every academic year (Rs. 3000 every semester), is meant to cover the expenditure of all the extracurricular activities in the campus. With an approximate strength of students at IIT Roorkee being close to seven thousand, an amount of Rs. 6000 per student translates to an annual budget of over Rs. 4 crores."

---
Every semester, every student of IIT Roorkee each pays a certain amount towards the ‘Gymkhana Activities’ of the institute. This amount, which sums up to Rs. 6000 every academic year (Rs. 3000 every semester), is meant to cover the expenditure of all the extracurricular activities in the campus. With an approximate strength of students at IIT Roorkee being close to seven thousand, an amount of Rs. 6000 per student translates to an annual budget of over Rs. 4 crores. 

As substantial as the amount might seem, a perfect testimony to the importance of such an extensive budget was given by the former Director of IIT Roorkee, Dr. Pradipta Banerjee. During the orientation ceremony of the batch of 2016-17, he said, “Students, when you go out in public, you wear a suit to create an impression. Similarly, your academics might be your trousers and your shirt, but your extracurriculars play the role of your the blazer and your tie.” 

With the dissolution of the Hobbies Club in the previous academic year, a Students’ Technical Council (organized along the lines of the Cultural Council and the Sports Council) emerged to cater to the demands of students involved in multiple technical clubs and groups. The Gymkhana fees, apart from the needs of the cultural, sports, and technical councils, also fulfils the requirements of various other campus activities that are pivotal to students’ everyday lives. For the very first time, a well-structured breakdown of the Gymkhana fees was released publicly last year by the former Convenor of SAC, Mr. Apurwa Sarwajit. While there have been some changes to the erstwhile allocation, the breakdown, in our belief, is still immensely convoluted and volatile in nature.

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
               	hoverBackgroundColor:'#27AE60',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
    options: {
   		 	layout: {
        		    padding: {
                		left: 50,
                		right: 50,
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


###  Bhawans

**Bhawan Replacement & Purchase (BRP): ₹1700/- per student per year**

**All Bachelors’ Bhawans: ₹400/- per student per year**

_Note: A majority of our gymkhana fees (28%) goes to the DOSW for Bhawan Replacement & Purchase (BRP) Fund. In addition to the BRP fund, an amount of ₹400/- is also paid to the respective bhawans for promoting cultural activities, paying salaries to temporary employees, and taking care of all miscellaneous activities in the bhawans._

A conversation with Mr. Aniket Jaiswal, the Cultural Secretary of Rajiv Bhawan, brought to the forefront that a major chunk of the allocated fund is consistently spent on the salaries of the temporary staff, and hence, little is left for bhawan activities. In addition to this, exorbitant expenses were incurred for Rajiv Bhawan’s last bhawan day, with food costing ₹650/- per plate (paid through the CCB account) and approximately ₹1,00,000 spent on decorations, tents, etc. Apart from bhawan inmates, only deans, institute guests, and the student senators are invited to such days.

Upon being asked about the significance of bhawan days, which usually prove to be quite an expense to the institute, Ms. Pragya Choudhary, the current Technical Secretary of Kasturba Bhawan, said, “It is a way to make unresponsive people responsive and imbibe a sense of belongingness in the bhawan inmates.” She further termed the usage of the bhawan funds as “confidential”.

When asked about the usage of the BRP fund, Mr. Sambhav Jain (GS: Hostel Affairs), responded, “The BRP funds are being used judiciously—but not uniformly—by the various bhawans, because the funds are controlled centrally and are allocated to a particular bhawan only on the request of the concerned council. This, in a sense, means that if a bhawan council is sufficiently proactive, they can access a huge portion of the funds and use it as per the bhawan’s needs.”

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


<canvas id="myChart2" width="400" height="200"></canvas>
<script>
var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
   	
   		type: 'horizontalBar',
    
    	data: {
        	
        	labels: ["Sarojini", "Rajendra", "Jawahar", "Cautley", "Govind", "Azad","Ravindra","Kasturba","RKB","Ganga","Rajiv", "Others"],
        	
        	datasets: [{
                label: '# of Votes',
            	data: [644918,562493,533725,526504,459337,448443,365540,235481,233481,200675,186588,250000],
            	backgroundColor:'#C4C4C4',
               	hoverBackgroundColor:'#27AE60',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
    options: {
   		 	layout: {
        		    padding: {
                		left: 175,
                		right: 50,
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

On the condition of anonymity, one of the current senators clearly vouched for the need of an alternate channel for the distribution of BRP funds since the current mode (through the DOSW office) usually ‘causes delays’.



###  Students’ Activities

**Misc. Students’ Activities (DOSW): ₹1200/- per student per year
Students’ Activities (ADOSW): ₹50/-  per student per year** 

The funds act as buffer in cases where unanticipated disbursement has to be made. The activities falling under this section remain very motley and unpredictable. For instance, the fee for YourDost, the online counselling and emotional wellness platform, was paid from these funds. Also, in case a student seeks monetary help from college, if deemed worthy, these funds are used. If RFID-enabled cards, for example, are ever issued to the students, they shall be paid for through this channel.  



###  Sports Council

**Sports Council: ₹850/- per student per year**

While IITR boasts of one of the best sports facilities in the country, that there is a ‘preference’ for the NSO-registered students and those selected for institute teams is the complaint of a majority of the students. To counter this, Mr. Shubham Vij (GS: Sports Affairs) has promised the establishment of ‘beginners’ camps’ for every student, as each student pays the sports fee. He also urges students to participate in the intra-bhawan and inter-bhawan sports competitions and contribute to developing a healthy sporting culture at IITR. However, for students who want to try their hands at a new sport, lack of adequate equipment and support infrastructure still remain a major concern.


_Note: The breakdown varies with time and from sport to sport; therefore, we were unable to get a more detailed deconstruction of the funds. This will be covered in greater detail in a Watch Out article in the works, which will assess the intricacies of the sports culture at IITR. _




###  Students’ Club

**Students’ Club: ₹450/- per student per year**

The Students’ Club accounts for 7.5% of the gymkhana fees. This is used in its entirety for the functioning and maintenance of the three units of the Students’ Club, namely, the Main Unit, the Alaknanda Unit and the Jawahar Unit, which is soon to be transferred to Jawahar Bhawan as per Mr. Arpit Agrawal, the current Technical Secretary of Jawahar Bhawan. It has ample infrastructure in all its units, with the maximum obviously being in the Main Unit.

The Students’ Club has a total of 5 permanent employees, 6 temporary employees, and 1 part-time accountant. The permanent employees, of which 2 will be retiring soon, have ‘pretty high salaries’, as stated by Mr. Suyash Vishnoi (Secretary: Students’ Club). The data obtained from the Annual Account Statement seems to support his claims, revealing that nearly 72% of the allocated funds go into paying salaries to the employees. Even after said retirement of personnel, this will remain the single largest guzzler of Students’ Club’s funds.
                   
The second largest chunk of the expenditure is on Billiard Games, comprising maintenance of the pool and snooker tables, and all other related equipment. It accounts for a mere 7.5%, however, in monetary terms, this translates to Rs. 3,17,000. At the same time, these games contribute to the income of the Students’ Club through the ‘coupons and bookings’ which bring in about Rs. 3,75,000, and hence, they comfortably compensate for their expenditures.

The previous year saw the first time that the Students’ Club ran in deficit. Therefore, corpus funds from the last ten years were used to compensate for the same. This put pressure on these coffers and in the words of the Secretary, they will soon be exhausted. Mr. Vishnoi adds that the Club has been advised by the SAC to exhaust these before an increase in the share of Students’ Club in the Gymkhana fees can be considered. Additionally, there has been a consistent decrease in the said share from Rs. 550 to Rs. 500, and finally to Rs. 450 in the past 3 years. With the Chess team now regularly representing (and bringing in laurels) in various competitions like the Inter-IIT Sports Meet, we believe that the reconsideration of this fund is imminent. 


The Students’ Club has been proactive in increasing the usage of its paraphernalia by the student community. It has organised snooker workshops to increase participation by non-players as well as hired a chess coach to help the teams with their Inter-IIT sports meet preparations. The club also spends approximately Rs. 4,50,000 on the Annual Club Day and other activities, including the tournaments it holds round the year.

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


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
               	hoverBackgroundColor:'#27AE60',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
    options: {
   		 	layout: {
        		    padding: {
                		left: 140,
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


<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


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
               	hoverBackgroundColor:'#27AE60',
            	borderWidth: 2,
            	barThickness: .2
        	}]
    	},
    options: {
   		 	layout: {
        		    padding: {
                		left: 147,
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



###  Students’ Technical Council

**Students’ Technical Council**: ₹400/- per student per year
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


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
               	hoverBackgroundColor:'#27AE60',
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


_“STC currently gets Rs. 400 per student of the total gymkhana fees. In the past years, the Council has had a splendid record, winning national and international competitions, and organizing workshops/lectures which have been a great source of technical knowledge in the campus. Given the promising potential of the Council, there is still scope for more efficient usage of increased funds, if provided. Also, in an effort to make groups more open, and for students to be able to bear the fruits of their gymkhana fees, the STC [had] launched an initiative that [sic] all STC groups will be listing all the resources/equipment purchased by them through STC Funds publicly. Any student can issue that resource/equipment just by writing an application to the respective group's secretary [sic]. If available, that resource or equipment can be issued to her/him.”_

**_-Mr. Punit Dhoot, (GS: Technical Affairs)_**

(Footnote: Resources of STC)


While Tinkering Lab and TIDES do not receive finances from the Gymkhana fees, SAE—in addition to the funds allocated from the gymkhana fees—receives monetary help from the Director’s Endowment Funds. The funds (shown in the graph above) were allocated at the request of the respective groups based on their judgements and needs. The breakdown, clearly, does not represent the institute’s or SAC’s perspective on the requirement of council groups.



###  Cultural Council 

**Cultural Council**: ₹350/- per student per year

(GRAPH-5)

_Note: Inter-IIT funds (₹8,50,000) have been removed from the complete budget to get a better visualisation of the graph._ 


The debate of making groups under the Cultural Council open to the entire campus populace has gained much momentum since its initiation; and has been able to garner the SAC’s attention as well. This is meant to make the resources purchased by the Cultural Council available to every campus resident fair and square.

This year, the SAC took multiple initiatives to increase the participation of the student community in cultural activities. All the groups came together to recruit again in the spring semester to provide another chance to students who might have missed it. The participation for the Inter-IIT Cultural Meet too was made open and transparent, and not limited to the respective groups. 
