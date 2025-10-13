$(document).ready(function() {
  $.getJSON("data/datasets.json", function(data) {
    $('#datasets').DataTable({
      data: data,
      columns: [
        { data: "title" },
        { data: "authors" },
        { data: "year" },
        { data: "keywords" },
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