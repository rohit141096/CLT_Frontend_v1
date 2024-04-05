module.exports.folderName = {
  type: "text",
  hasLable: true,
  lable: "folder name",
  is_mandatory: true,
  is_limited: true,
  max_characters: 35,
  min_characters: 3,
  is_capital: false,
  requires_validation: true,
  validation_type: "alphaNumericWithHyphenAndSpace",
  placeholder: "Enter Folder Name",
}

module.exports.executorTypeShortName = {
  type: "text",
  hasLable: true,
  lable: "short name",
  is_mandatory: true,
  is_limited: true,
  max_characters: 30,
  min_characters: 2,
  is_capital: false,
  requires_validation: true,
  validation_type: "alphaNumericWithHyphenAndSpace",
  placeholder: "Enter Executor Type Short Name",
}

module.exports.administratorRoleShortName = {
  type: "text",
  hasLable: true,
  lable: "short name",
  is_mandatory: true,
  is_limited: true,
  max_characters: 30,
  min_characters: 2,
  is_capital: false,
  requires_validation: true,
  validation_type: "alphaNumericWithHyphenAndSpace",
  placeholder: "Enter Administrator Role Short Name",
}
