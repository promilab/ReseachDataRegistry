$(document).ready(function() {
  $.getJSON("data/datasets.json", function(data) {
    $('#datasets').DataTable({
      data: data,
      columns: [
        { data: "title" },
        { data: "domain" },
        { data: "origin" },
        { data: "data type" },
        { data: "keywords" },
        { data: "events" },
        { data: "activities" },
        { data: "creator" },
        { data: "year" },
        { data: "publication" }, 
        { 
          data: "url",
          render: function(data) {
            return `<a href="${data}" target="_blank">View</a>`;
          }
        }
      ]
    });
  });
});
