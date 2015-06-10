Projects = new Meteor.Collection('projects');
ExtraProjects = new Meteor.Collection('extraProjects');


Schema = {};

Schema.step1 = new SimpleSchema({
  // loginID:   {type: String,label: "Login ID", max: 200, optional: true },
  // loginEmail:   {type: String,label: "Login mail", max: 200, optional: true },
  name:   {type: String,label: "Full Name", max: 200, optional: false, defaultValue:'First Name, Last Name' },

  user_photo:{type:String, label:"profile photo URL", optional:true, defaultValue:"...add link to profile pic..."},
  user_title:{type:String, label:"add role within company", optional:true, defaultValue:"...current role..."},
  user_headline:{type:String, label:"personal headline", optional:true, max:140, defaultValue:"...in 140 characters or less..."},

  contact_mail:  {type: String,label: "Contact eMail", max: 200, optional: true },
  contact_num:  {type: String,label: "Contact Telephone", max: 200, optional: true },
  contact_link:  {type: String,label: "LinkedIn link", max: 200, optional: true },
  contact_bool:  {type: Boolean, label: "OK to Contact Me ?", defaultValue: true}



  // registerAs:  {type: String, label: "Register As:", optional: false, defaultValue:'Individual',
  //             allowedValues: [
  //               "Individual",
  //               "StartUp Rep",
  //               "Corporate Rep"]},


}),

Schema.step2 = new SimpleSchema({
  cName:   {type: String, label: "Company Name", max: 200, optional:true ,defaultValue:'...Company Name...'},
  cid:    {type: String, label: "Companies House Reference Number", max: 200, defaultValue:'...CRN: Company Reference Number...'},

  hline:  {type: String, label: "Headline", max: 200 ,optional:true, defaultValue:'(...company headline...)'},
  about:   {type: String, label: "About", max: 1000 ,optional:true, defaultValue:'(...company description...)'},

  url:    {type: String, label: "Website", max: 200, optional:true, defaultValue:'(...URL link to website...)'},
  logo:   {type: String, label: "Logo", max: 200, optional:true, defaultValue:'(...URL link to logo...)'},
//////////////////
  type:   {type: String, label: "Company Type", optional: false, defaultValue:'StartUp',
            allowedValues: [
              "StartUp",
              "Corporate"]},

  employees:{
    type: [String],
    label: 'Additional company representatives (name or email)',
    optional: true,
    autoform: {
      afFieldInput: {
        type: "text",
        defaultValue:'...First Name, Last Name...'
      }
    }
  },
//////////////////////
  industry: {
        type: Array,
        minCount: 1,
        maxCount: 5,
        label: "Select Industry segment(s)",
        optional: true,
        defaultValue: ["TBD"],
        autoform: {
           options: [
              {label: "Financial",value: "financial"},
              {label: "Construction",value: "construction"},
              {label: "Manufacturing",value: "manufacturing"},
              {label: "Transport",value: "transport"},
              {label: "Education",value: "education"},
              {label: "(Other)",value: "other"},
              {label: "TBD",value: "tbd"}
            ]}
        },
     "industry.$": {
        type: String
     },

  loc:    {type: String, label: "Postcode", max: 10, optional:true, defaultValue:'(XXX XXXX)'},
  addr:   {type: String, label: "Address", max: 1000 ,optional:true, defaultValue:'(...company address...)'},

  // rep_name:    {type: String, label: "Company representative", max: 200, optional:true,defaultValue:'(...firstname lastname...)' },
  // rep_role:    {type: String, label: "contact role in company", max: 200, optional:true,defaultValue:'(... community dept rep ...)' },
  // rep_email:   {type: String, label: "contact email", max: 200, optional:true,defaultValue:'(...name@company.com...)' },
  // rep_tel:     {type: String, label: "contact telephone #", max: 200, optional:true,defaultValue:'(...+44 #### ### ####...)' },

  img:    {type: String, label: "Image Url",  optional:true, defaultValue:'(...URL link to company picture(s)...)'},
  // projects:{type: [String], optional:true, max:10},

  news: {type: String, optional:true,defaultValue:'...recent company news, Twitter etc here...'}

});

Schema.step3 = new SimpleSchema({
  companyId:  {type: String, optional: false, max: 200 },
  title:    {type: String, optional: true, label: "Project Title", max: 200 },
  hline:    {type: String, optional: true, label: "Headline", max: 200 },
  desc:     {type: String, optional: true, label: "Description", min: 20, max: 1000,
    autoform: {rows: 5}   },
  img:      {type: String, optional: true, label: "URL link to project picture(s)"   },
  link:     {type: String, optional: true, label: "Link to project on your website",    regEx: SimpleSchema.RegEx.Url,
    autoform: {type: "url"} },

  location:   {type: String, optional: true, label: "Location (postcode)", defaultValue:'...SW7 2AZ...'},

  startDate:   {type: String, optional: true, label: "Approximate Start Date", defaultValue:'Today' },
  duration:   {type: String, optional: true, label: "Duration", defaultValue:'10W'},

  status:   {type: String, optional: true, label: "Project Completion Level?" ,defaultValue:'0%'},
  // active:   {type: Boolean, label: "Active", defaultValue: true},

  categories: {type: [String],optional: true,
   autoform: {
     type: "select-multiple",
     options: function () {
       var tmp = [
         {label:'Green Technology', value: 'Green Technology'},
         {label:'Energy Management',value:'Energy Management'},
         {label:'Sustainable Transport', value: 'Sustainable Transport'},
         {label:'Sustainable Products', value:'Sustainable Products'},

         {label:'Education',value: 'Education'},
         {label:'Community',value: 'Community'},
         {label:'Employment',value: 'Employment'},
         {label:'Food and Shelter',value: 'Food and Shelter'},
         {label:'Accessibility', value: 'Accessibility'},

         {label:'Fitness',value: 'Fitness'},
         {label:'Mental Health',value:'Mental Health'},
         {label:'Rehabilitation',value:'Rehabilitation'},
         {label:'Seniors',value:'Seniors'},
         {label:'Special Needs', value: 'Special Needs'},
         {label:'Lecturing Opportunites',value:'Lecturing Opportunites'}
         ];
       return tmp;
     }
   }
 },

  interactions: {type: [String],optional: true,
   autoform: {
     type: "select-multiple",
     options: function () {
       var tmp = [
         {label:'Donate Materials',value:'Donate Materials'},
         {label:'Monetary Donations',value:'Monetary Donations'},
         {label:'Volunteering',value:'Volunteering'},
         {label:'Research Agreements',value:'Research Agreements'},
         {label:'Product collaboration',value:'Product collaboration'},
         {label:'Brand Collaboration',value:'Brand Collaboration'},
         {label:'Lecturing Opportunites',value:'Lecturing Opportunites'}
         ];
       return tmp;
     }
   }
 },

  impact_e:   {type: String, optional: true, label: "Environmental Impact", defaultValue:'xx trees planted'},
  impact_h:   {type: String, optional: true, label: "Health Impact", defaultValue:'20 xx upgraded'},
  impact_r:   {type: String, optional: true, label: "Rights Impact", defaultValue:'10 ppl xx'}

});


ExtraProjects.attachSchema(Schema.step3)
Projects.attachSchema([
  Schema.step1,
  Schema.step2
  // ,Schema.step3
]);





if (Meteor.isClient) {

  AutoForm.hooks({
    prjct: {
      before: {
        insert: function(doc, template) {
          if(Session.get('companyId') == ''){
            return false;
          }else{
          doc.companyId = Session.get('companyId');
          return doc;
        }
        }
      },
      after:{
        insert: function(doc){
          Router.go('viewSummary', {
            _id:  Session.get('companyId')
          });
        }
      }
    }
  })

  Meteor.startup(function() {
    AutoForm.setDefaultTemplate("semanticUI");

    Template.afCheckbox_semanticUI.onRendered(function() {
      $(this.firstNode).checkbox();
    });
  });

  Template.registerHelper('Schema', function() {
    return Schema;
  });

  Template.steps.helpers({
    stepClass: function(id) {
      var activeStep = this.wizard.activeStep();
      var step  = this.wizard.getStep(id);
      if (activeStep && activeStep.id === id) {
        return 'active';
      }
      if (step.data()) {
        return 'completed';
      }
      return 'disabled';
    }
  });





  Template.project.helpers({
    steps: function() {
      return [{
        id: 'step1',
        title: 'User Info',
        schema: Schema.step1
      },
      {id: 'step2',
      title: 'Company',
      schema: Schema.step2,
      onSubmit: function(data, wizard) {
            var self = this;
            Projects.insert(_.extend(wizard.mergedData(), data), function(err, id) {
              if (err) {
                self.done();
              } else {
                Session.set('companyId',id);

                Router.go('viewSummary', {
                  _id: id
                });
              }
            });
          }
        }
    // },
    //
    //     {id: 'step3',
    //     title: 'Project Details',
    //     schema: Schema.step3,
    //     onSubmit: function(data, wizard) {
    //       var self = this;
    //       Projects.insert(_.extend(wizard.mergedData(), data), function(err, id) {
    //         if (err) {
    //           self.done();
    //         } else {
    //           Router.go('viewSummary', {
    //             _id: id
    //           });
    //         }
    //       });
    //     }
    //   }

      ];
    }
  });

}

// var requestHook = {
//   before: {
//     insert: function(doc) {
// 			doc.companyId = Session.get('companyId');
//       return doc;
//     }
//   }
// }
//
//
// AutoForm.addHooks('addProject', requestHook);


Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.redirect('project', {
    step: 'step1'
  });
});

Router.route('/project/:step', {
  name: 'project'
});

Router.route('/extraProject/', {
  name: 'extraProject'
});

Router.route('/projects/:_id', {
  name: 'viewSummary',
  template: 'viewSummary',
  data: function() {
    Session.set('companyId',this.params._id);
    return Projects.findOne(this.params._id);
  }
});
