
function Filters() {

  var that = this;

  this.draw = function(selector) {
    var html = '';
    var i = 0;
    var $selector = $(selector);
    _.each(this.fields, function(field, index) {
      field.label = field.label != undefined ? field.label : index;
      field.id = 'field-' + i;
      $selector.append(ich.select(field));
      i++;
    });    
    $(selector + ' select').selectpicker().bind('change', this.constructQuery);

  }

  this.constructQuery = function() {
    var i = 0;
    var values = {};
    _.each(that.fields, function(field, index) {
      var val = $('#field-' + i).val();
      if (val != null) {
        values[index] = val;
      }
      i++;      
    });
    query.constructActive(values);
  }

  this.fields = {
    'Safety-Net Type': {
      type: 'select',
      msg: 'Select type of care',
      startCol: 'Y',
      options: [
        'Community Health Center (CHC) / Federally Qualified Health Center (FQHC)',
        'Community-funded Safety Net Clinic (CSNC)',
        'Local Public Health Department and Public Nursing Services',
        'Rural Health Clinics (RHC)',
        'School-based Health Center (SBHC)',
        'Human/Social Services Agency',
        'Certified Medicaid/CHP+ Application Assistance Site',
        'Connect for Health Colorado Assistance Site',
        'WIC Clinic Site',
        'HCP Pediatric Specialty Clinics',
        'Planned Parenthood Clinic',
        "Veteran's Association Health Center",
        'Community Mental Health Clinic',
        'Community-based Dental Clinic',
        'Critical Access Hospital',
        'Emergency Department',
        'CICP Provider',
        'Community Centered Boards (CCB)',
        'Residency Program',
        'Voluntary Health Organization ',
        'Migrant Health Center',
        'Refugee Health Site',
        'Certified Center for Independent Living',
        'Other Community-based Clinic',
        'Other Dental Clinic',
        'Other Mental Health Clinic',
        'Other Community-based Organization'
        ]
    },

    'Services Provided': {
      type: 'select',
      msg: 'Select services',
      startCol: 'AZ',
      options: [
        'Primary Health Care',
        'Dental Care',
        'Vision Care',
        'Mental/Behavioral Health Care',
        "Women's Health",
        "Children's Health",
        'Adolescent Care',
        'Adult Day Services',
        'Respite Care',
        'Substance Abuse Treatment',
        'Case Management',
        'Chronic Disease Mgmt',
        'HIV/AIDS Treatment & Care',
        'STI Testing, Treatment, & Prevention',
        'Health Care for Military Veterans',
        'Health Care for Disabilities or Special Needs',
        'LGBT Health Services',
        'Immunizations',
        'Medicaid Enrollment',
        'Connect for Health Colorado Enrollment Assistance',
        'Other'
        ]
    },

    'Age Groups Served': {
      type: 'select',
      msg: 'Select age groups',
      startCol: 'BU',
      options: [
        'Infants (0-3)',
        'Children (3+)',
        'Teens (13+)',
        'Adults (18+)',
        'Elderly (65+)'
        ]
    },

    'Populations Served (Specialization)': {
      label: 'Populations Served',
      type: 'select',
      msg: 'Select a specialization',
      startCol: 'BZ',
      options: [
        'Migrant Farmworkers',
        'Homeless',
        'LGBT',
        'Refugee',
        'American Indian',
        'Military Veterans',
        'HIV/AIDS',
        'Disability & Special Needs',
        'Rural',
        'Other'
        ]
    },

    'Languages Spoken': {
      type: 'select',
      msg: 'Select specific populations',
      startCol: 'CJ',
      options: [
        'Spanish',
        'German',
        'French',
        'Vietnamese',
        'Korean',
        'Chinese',
        'Arabic',
        'Phone Translation Services',
        'Other'
        ]
    },

    'Payment Assistance & Special Accommodations': {
      type: 'select',
      msg: 'asdf',
      startCol: 'CS',
      options: [
        'Sliding Scale for Primary Care',
        'Cash/Time of Service Discount',
        'CICP Services',
        'Medicaid/CHP+ Accepted',
        'Other Discount Services',
        'Open Late / Weekends',
        'Other ?'
        ]
    }
  };

 
}


