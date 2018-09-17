(function () {
    var module = angular.module('pagerSrv', []);
    module.factory('pagerSrv', function () {
        // service definition
        var service = {}
        // service implementation
        service.GetPager = function (totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);
            // console.log();
            var startPage; 
            var endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                    // console.log('Less than 6 condition');
                    // console.log('current page =' + currentPage);
                    // console.log('total page =' + totalPages);
                    // console.log('start page =' + startPage);
                } else if (currentPage + 4 >= totalPages) {
                    //Will get here if there will be 9 pages left before the last page.
                    startPage = totalPages - 9; //minus 9 to get the start page from the last 10 pages
                    endPage = totalPages; //total page
                    // console.log('current page =' + currentPage);
                    // console.log('total page =' + totalPages);
                    // console.log('start page =' + startPage);
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                    // console.log('current page =' + currentPage);
                    // console.log('start page =' + startPage);
                    // console.log('end page =' + endPage);
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = []
            for (var k = startPage; k < endPage + 1; k++) {
                pages.push(k);
            }
            // var pages = _.range(startPage, endPage + 1);
            // console.log(pages);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }

        return service;
    });
})();