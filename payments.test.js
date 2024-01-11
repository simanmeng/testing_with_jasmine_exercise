describe('payments test (with setup and tear-down', function () {
    beforeEach(function () {
        //initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    })
    it('should add a curPayment object to allPayments on submitPaymentInfo()', function() {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual('20%');
    });
    it('should not add a curPayment object to allPayments on submitPaymentInfo() if bill amount input is empty', function () {
        billAmtInput = '';
        submitPaymentInfo();

        expect(Object,keys(allPayments).length).toEqual(0);
    });

    it('should update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        const curList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curList.length).toEqual(3);
        expect(curList[0].innerText).toEqual('$100');
        expect(curList[1].innerText).toEqual('$20');
        expect(curList[2].innerText).toEqual('20%');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedCurPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: '20'
        }

        expect(createCurPayment()).toEqual(expectedCurPayment);
    });

    it('should not create a new payment on createCurPayment() on an empty input', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    it('should update #summaryTable on updateSummary()', function () {
        let curList = document.querySelectorAll('#summaryTable tbody tr td');
        updateSummary();

        expect(curList.length).toEqual(3);
        expect(curList[0].innerText).toEqual('$100');
        expect(curList[1].innerText).toEqual('$20');
        expect(curList[2].innerText).toEqual('20%');
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

