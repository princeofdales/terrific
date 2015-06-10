

Template.viewSummary.helpers({
  projects: function(){
    console.log(this);
    return ExtraProjects.find({companyId:this._id});
  },
  bob:function(){
    console.log(this);
    return null;
  }

});
