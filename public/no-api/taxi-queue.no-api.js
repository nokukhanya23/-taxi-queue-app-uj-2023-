document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'no-api-1.0',
            
            init(){
                this.passangerTotal;
                this.taxisTotal;
            },

            passangerTotal: 0,
            taxisTotal: 0,

            joinQueue() {
                this.passangerTotal += 1;
            },


            leaveQueue() {
                if(this.passangerTotal > 0){
                    this.passangerTotal -= 1;
                }
                
            },

            joinTaxiQueue() {
                this.taxisTotal += 1
            },

            queueLength() {
                return this.passangerTotal;
            },

            taxiQueueLength() {
                return this.taxisTotal;
            },

            taxiDepart() {
                if(this.taxisTotal > 0 && this.passangerTotal >=12 ){
                    
                    this.taxisTotal -= 1;
                    this.passangerTotal -= 12;
                }
            }

            
        }

    });

});


