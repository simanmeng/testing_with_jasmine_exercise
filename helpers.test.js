describe('helpers test (with setup and tear-down', function () {
    beforeEach(function () {
        //initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    //check if sumPaymentTotal returns correct values
    it('should sums total from allPayments objects on sumPaymentTotal()', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal(billAmt)).toEqual(100)

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();
        expect(sumPaymentTotal(tipAmt)).toEquaL(60);
        expect(sumPaymentTotal(billAmt)).toEqual(300);
    });

    //check if the bill and tip amount are converted into a tip percent
    it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function () {
        expect(calculateTipPercent(100/20)).toEqual(20);
        expect(calculateTipPercent(200/20)).toEqual(10);
    });

    //check if a new td element is created
    it('should create a new td element on appendTd() with input of a tr element and a value', function () {
        let  newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEquaL(1);
        expect(newTr.firstChild.innerHTML).toEquaL('test');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0] = '';
        summaryTds[1] = '';
        summaryTds[2] = '';
        allPayments = {};
        paymentId = 0;
    });
})