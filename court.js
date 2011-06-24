var $ = jQuery.noConflict();
$(document).ready(function() {
    /*   ({
   'case1_info' : {
      "plaintiff": "Snyder",
      "defendant":"Phelps",
      "summary":"The justices unanimously shot down the NFL\'s longtime quest for protection from antitrust laws in a decision that was cheered by its players\' association and held lessons for other professional sports leagues. The court said that the NFL should be considered as 32 individual, independent teams when it came to selling licensed items such as jerseys and caps. It rejected the league\'s argument that it should be exempted from antitrust laws because it acts as a single entity.",
      "majority":"Alito, Ginsburg, Scalia, Sotomayor, Thomas",
      "minority":"Kagan, Kennedy, Breyer, Roberts"});*/
    
   var justices = {
      "alito":"Samuel Anthony Alito Jr.",
      "breyer":"Stephen G. Breyer",
      "ginsburg":"Ruth Bader Ginsburg",
      "kagan":"Elena Kagan",
      "kennedy":"Anthony M. Kennedy",
      "roberts":"John G. Roberts Jr. (chief justice)",
      "scalia":"Antonin Scalia",
      "sotomayor":"Sonia Sotomayor",
      "thomas":"Clarence Thomas"
      };
      
   //copy/paste: justices.alito, justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.roberts, justices.scalia, justices.sotomayor, justices.thomas
   
   //Snyder v. Phelps
   var snyder_array = {
      "plaintiff": "Snyder",
      "defendant":"Phelps",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.roberts, justices.scalia, justices.sotomayor, justices.thomas,],
      "minority":[justices.alito],
      "summary":"The court gutted one of federal prosecutors' favorite tools for pursuing corrupt politicians and corporate chiefs, casting doubt on the convictions of two prominent executives snared by the law: former Enron chief executive Jeffrey K. Skilling (right) and newspaper magnate Conrad Black (left). The justices said prosecutors have stretched too far a federal statute that makes it a crime to deprive the public or a company of the \"intangible right of honest services.\" The decision did not overturn the convictions of Skilling and Black, but it said they can renew their arguments in lower courts.",
      "winner":"defendant"};
   var snyder = eval("snyder_array");
   
   //Connick v. Thompson
   var connick_array = {
      "plaintiff": "Connick",
      "defendant":"Thompson",
      "majority": [justices.alito, justices.kennedy, justices.roberts, justices.scalia, justices.thomas],
      "minority":[justices.breyer, justices.ginsburg, justices.kagan, justices.sotomayor],
      "summary":"summary",
      "winner":"plaintiff"};
   var connick = eval("connick_array");
   
   //Skinner v. Switzer
   var skinner_array = {
      "plaintiff": "Skinner",
      "defendant":"Switzer",
      "majority": [justices.roberts, justices.scalia, justices.breyer, justices.ginsburg, justices.kagan, justices.sotomayor],
      "minority":[justices.alito, justices.kennedy, justices.thomas],
      "summary":"summary",
      "winner":"plaintiff"};
   var skinner = eval("skinner_array");
   
   //AZ Christian v. Winn
   var christian_array = {
      "plaintiff": "Arizona Christian School Tuition Org.",
      "defendant":"Winn",
      "majority": [justices.kennedy, justices.roberts, justices.scalia, justices.thomas],
      "minority":[justices.alito, justices.breyer, justices.ginsburg, justices.kagan, justices.sotomayor],
      "summary":"summary",
      "winner":"plaintiff"};
   var christian = eval("christian_array");
   
   //Brown v. Plata
   var plata_array = {
      "plaintiff": "Brown",
      "defendant":"Plata",
      "majority": [justices.kennedy, justices.breyer, justices.ginsburg, justices.kagan, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"plaintiff"};
   var plata = eval("plata_array");
   
   //Brown v. Plata
   var plata_array = {
      "plaintiff": "Brown",
      "defendant":"Plata",
      "majority": [justices.kennedy, justices.breyer, justices.ginsburg, justices.kagan, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var plata = eval("plata_array");
   
   //Chamber of Commerce v. Whiting
   var commerce_array = {
      "plaintiff": "Chamber of Commerce",
      "defendant":"Whiting",
      "majority": [justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "minority":[justices.breyer, justices.ginsburg, justices.kennedy, justices.sotomayor],
      "summary":"summary",
      "winner":"defendant"};
   var commerce = eval("commerce_array");
   
   //Ashcroft v. Al-Kidd
   var ashcroft_array = {
      "plaintiff": "Ashcroft",
      "defendant":"Al-Kidd",
      "majority": [justices.alito, justices.breyer, justices.ginsburg, justices.kennedy, justices.roberts, justices.scalia, justices.sotomayor, justices.thomas],
      "minority":[],
      "summary":"summary",
      "winner":"defendant"};
   var ashcroft = eval("ashcroft_array");
   
   //JDB v. NC
   var jdb_array = {
      "plaintiff": "J.D.B.",
      "defendant":"North Carolina",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var jdb = eval("jdb_array");
   
   //Walmart v. Dukes
   var walmart_array = {
      "plaintiff": "Wal-Mart",
      "defendant":"Dukes",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var walmart = eval("walmart_array");
   
   //Brown v. Entertainment Merchants Assn.
   var merchants_array = {
      "plaintiff": "Brown",
      "defendant":"Entertainment Merchants Assn.",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var merchants = eval("merchants_array");
   
   //AZ Free Enterprise v. Bennett
   var enterprise_array = {
      "plaintiff": "Arizona Free Enterprise",
      "defendant":"Bennett",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var enterprise = eval("enterprise_array");
   
   //American Electric Power v. CT
   var power_array = {
      "plaintiff": "American Electric Power",
      "defendant":"Connecticut",
      "majority": [justices.breyer, justices.ginsburg, justices.kagan, justices.kennedy, justices.sotomayor],
      "minority":[justices.alito, justices.roberts, justices.scalia, justices.thomas],
      "summary":"summary",
      "winner":"defendant"};
   var power = eval("power_array");
   
   //load first case and case links when page loads
   $('#case-info #plaintiff').html(snyder.plaintiff);
   $('#case-info #defendant').html(snyder.defendant + ' <img src="images/check.png">');
   $('#case-info p').html(snyder.summary);
   $('#judges #pro-list').html(snyder.majority.join(', '));
   $('#judges #con-list').html(snyder.minority.join(', '));
   
   //should be for...each loop
   $('#snyder').html(snyder.plaintiff + ' v. ' + snyder.defendant);
   $('#connick').html(connick.plaintiff + ' v. ' + connick.defendant);
   $('#skinner').html(skinner.plaintiff + ' v. ' + skinner.defendant);
   $('#christian').html(christian.plaintiff + ' v. ' + christian.defendant);
   $('#plata').html(plata.plaintiff + ' v. ' + plata.defendant);
   $('#commerce').html(commerce.plaintiff + ' v. ' + commerce.defendant);
   $('#ashcroft').html(ashcroft.plaintiff + ' v. ' + ashcroft.defendant);
   $('#jdb').html(jdb.plaintiff + ' v. ' + jdb.defendant);
   $('#walmart').html(walmart.plaintiff + ' v. ' + walmart.defendant);
   $('#merchants').html(merchants.plaintiff + ' v. ' + merchants.defendant);
   $('#enterprise').html(enterprise.plaintiff + ' v. ' + enterprise.defendant);
   $('#power').html(power.plaintiff + ' v. ' + power.defendant);
   
   //select a case
   //gotta be a better way to do this, like with a loop
   var which_case;
   $('#snyder').click(function() {
      which_case = snyder;
      populate(which_case);
   });
   $('#connick').click(function() {
      which_case = connick;
      populate(which_case);
   });
   $('#skinner').click(function() {
      which_case = skinner;
      populate(which_case);
   });
   $('#christian').click(function() {
      which_case = christian;
      populate(which_case);
   });
   $('#plata').click(function() {
      which_case = plata;
      populate(which_case);
   });
   $('#commerce').click(function() {
      which_case = commerce;
      populate(which_case);
   });
   $('#ashcroft').click(function() {
      which_case = ashcroft;
      populate(which_case);
   });
   $('#jdb').click(function() {
      which_case = jdb;
      populate(which_case);
   });
   $('#walmart').click(function() {
      which_case = walmart;
      populate(which_case);
   });
   $('#merchants').click(function() {
      which_case = merchants;
      populate(which_case);
   });
   $('#enterprise').click(function() {
      which_case = enterprise;
      populate(which_case);
   });
   $('#power').click(function() {
      which_case = power;
      populate(which_case);
   });
   
   //pull in data associated with given case
   function populate(the_case){
      if (the_case.winner == "plaintiff") {
         $('#case-info #plaintiff').html(the_case.plaintiff + ' <img src="images/check.png">');
         $('#case-info #defendant').html(the_case.defendant);
      } else {
         $('#case-info #plaintiff').html(the_case.plaintiff);
         $('#case-info #defendant').html(the_case.defendant + ' <img src="images/check.png">');
      }
      $('#case-info p').html(the_case.summary);
      $('#judges #pro-list').html(the_case.majority.join(', '));
      //clear any Kagan recusals from HTML
      $('#judges #con-list').empty();
      $('#judges #con-list').html(the_case.minority.join(', '));
      if (the_case.plaintiff == "Chamber of Commerce" || the_case.plaintiff == "Ashcroft") {
        $('#judges #con-list').append('<br />*Justice Elena Kagan recused herself from this case.')
      }
   }
          
    // highlight cases when clicked
    $('div#cases ul#case-list li').click(function() {
         $('.selected').removeClass('selected');
         $(this).addClass('selected');
    });
    
});