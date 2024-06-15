(function ($) {
  
  //write your Custom Js
  
  // $('div.woocommerce-message').find('a').attr({'id':'cusbtn'});
   //$('div.woocommerce-message').find('a').addClass('site-btn')
  // $('div.woocommerce-message').find('a').prepend('<span class="shape"></span><span class="shape"></span><span class="shape"></span>')
  //$('div.woocommerce-message').append("<div class='mess_style'>");
  // $("[data-attribute='attribute_pa_oil-type']").attr({'id':'pa_bottype'});
  //   jQuery('div.variations').attr({'id':'remove_api_type'});
  //jQuery('div#remove_api_type').children().last().attr({'id':'remove_api_type_attr'});
  
  //jQuery('#main-menu li:first').addClass('current'); 
  
  //=============== Mobile menu dropdown script ================// 

 /* 
	$('.responsive-menu ul li').css({cursor: "pointer"}).on('click', function(){
	  $(this).find('ul').toggle();
	})
	
	// use css in style.css for dropdown
	
	   div.responsive-menu ul li ul.submenu {
		  display: none;
		}
*/
  
  //========= class add and remove by click toggle function=========//
  
 /* 
    $("#click_action").click(function(){
		$("a.new").toggleClass("new_btn");
	});
 */ 
 
  //=========class add and remove by click ul li tab(functional)  ==========//
 /*
 	$('#tabitem li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    });
 
 */
   //=========Condition wise class add and remove by click ==========//
  
/*  
     $("#filter_click_action").click(function(){
		$(".shop-sidemenu").addClass("active");
		$(".shop-sidemenu-ovelay").addClass("active");
		
	});
	$(".close-btn").click(function(){
		$(".shop-sidemenu").removeClass("active");
		$(".shop-sidemenu-ovelay").removeClass("active");
		
	});
 
 */
 
 
 //shop page sidebar widget panel customize--------------------//

	//$('div.bapf_head').addClass('shop-side-menu-item-title');
  //$('div.bapf_head h3').addClass('icon_add');
 //$('.icon_add').prepend('<i class="fas fa-clone"></i>');
  //$('div.bapf_body').addClass('shop-sidemenu-list');
 
 
  //$('input#hsubmit').before('<div class="input-submit-btn site-btn">')
 // $('input#hsubmit').after('</div>')

 
 //How to Insert element tag in specific location without closing tag in jquery
 
		//$('#check_html').wrap('<div class="col-md-6"><div class="ct-order">');
		//$('#payment').wrap('<div class="col-md-6"><div class="ct-order">');
		

 //How to Insert element tag in specific location with closing tag in jquery
		//$('#check_html').before('<h4 class="mb-30">Your Order</h4>');
		//$('#payment').before('<h4 class="mb-30">Payment Method</h4>');
		
		
	
 //New Attr class add when page on scroll

   /*
	$(window).on("scroll", function () {
            $('div#shopimg').find('img').attr({'class':'cus_shop_img'});
    	});

	*/
	
 //======= Condition wise Dealer Button Display   ======= //	

  /*
	$("#click_action").click(function(){
		$("a.new").toggleClass("new_btn");
	});
  */
	
 //======= Scroll condition wise class add and remove   ======= //
  /*
	$("#click_action").click(function(){

	 if ($("h5.stle2").hasClass("new_styleh5")) {
			$(window).on("scroll", function () {
				$("h5.stle2").addClass("new_styleh5");
			});
		}else{
			$(window).on("scroll", function () {
				$("h5.stle2").removeClass("new_styleh5");
			});
		}
	  
	});
  */	
	
  //======= page redirect when click on wishlidt button JS  =======//
    /*
		$("#hover_wishlit_icon").click(function(){
		 window.location.href ='https://www.petrolyne.com/wishlist/';
		return false
			
		});
    */
	
	
  //======= When Click On Menu Items Then will be Smooth scroll JS  =======//

	
/*	
	 $('.menu-item > a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    }
  });
  
*/	

//==========Click Wise Hide Anythings  ================//


/*
	   $("#btn").click(function(){
				$(".cokie_pop").hide();
			  });
		$("#btn2").click(function(){
				$(".cokie_pop2").hide();
			  });
		 $("#btn3").click(function(){
				$(".cokie_pop3").hide();
			  });

*/
			  
//===========When sroll Then Display Anythings Display sticky ============//


/*
			myID = document.getElementById("coopop2");

		var myScrollFunc = function () {
		  var y = window.scrollY;
		  if (y >= 340) {
			myID.className = "cokie_pop2 show";
		  } else {
			myID.className = "cokie_pop2 hide";
		  }
		};

		window.addEventListener("scroll", myScrollFunc);

*/		
	
//========== mobile humberbag menu js=============//
	
/*
	
		$(".mainmenu ul li").click(function(){
				$(".mainmenu ul li ul").toggleClass("drop");
			});
			$(".humberger-bar").click(function(){
				$(".offset-menu").toggleClass("active");
				$(".humberger-bar").toggleClass("active");
			});
*/
			
			
//======when click sub menu item then hide toggle slide==========//
	
/*	
	
		$(".mainmenu ul li ul li>a").click(function(){
				$(".offset-menu").removeClass("active");
				$(".humberger-bar").removeClass("active");
			});		

*/
			
	
//=======Campaign popup js Show /Hide============//

/*	
	   $(".clic_event").click(function(){
				$(".cam_form").show();
				
			});

       $('#iconpos').click(function() {
				   $('.cam_form').hide();
				});
	
*/	
	
   
})(jQuery);
