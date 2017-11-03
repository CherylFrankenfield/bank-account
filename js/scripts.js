//Business Logic Here

function Account(name, original, deposit, withdrawal, balance) {
  this.name = name;
  this.original = original;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
  this.balance = balance;
}

// Account.prototype.newNamehere()

// Interface Logic Here

$(document).ready(function() {
  $("#start").submit(function(event) {
    event.preventDefault();

    var newAccount = $("#new-account-name").val();
    var originalDeposit = parseInt($("#original-deposit").val());

    var account = new Account(newAccount, originalDeposit)

    $("#show-name").append("<li>" + newAccount + "</span></li>");
    $("#show-balance").append("<li>" + originalDeposit + "</span></li>");

  });
});
