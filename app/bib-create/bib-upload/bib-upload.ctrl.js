'use strict';

require('./file-upload');
angular.module('mlrg.bibcreate')
    .controller('BibUploadController', BibUploadController);

BibUploadController.$inject = ['$scope', 'FileUpload', 'SweetAlert'];


function BibUploadController($scope, FileUpload, SweetAlert) {

    //Todo: Validate the thing to ensure only bibs are uploaded
    //How to show success and errors? Look for a component to do that



    $scope.upload = function() {

        if($scope.files === undefined) {
            SweetAlert.swal('Please select a bib file', '', 'warning');
            return;
        }
        
        if ($scope.files[0].name.slice(-3) === 'bib') {
            SweetAlert.swal('File is in the upload queue');
            FileUpload.uploadBibFile($scope.files[0]);
        } else {
            SweetAlert.swal('Please upload a bib file', '', 'warning');
        }




    };

}
