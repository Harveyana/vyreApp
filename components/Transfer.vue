<template>
    <ion-modal 
      :is-open="props.isTransferModalOpen"
      :initial-breakpoint="0.65"
      :breakpoints="[0, 0.4, 0.5, 0.65, 0.75]" 
      :backdrop-dismiss="false"
      :backdrop-breakpoint="0"
      style="--border-radius: 32px;"
      @didDismiss="$emit('closeModal')"
      >

      

      <ion-content class="ion-padding content" style="">
        
        <div class="flex-row" style="margin: 5%;background: none;">
            <ion-card style="box-shadow: none;background: none;z-index: 888;margin: 0px;width: 100%;position: relative;bottom: 8%;">
                <ion-card-title color="primary" style="font-size: 200%;font-weight: bold;">Transfer</ion-card-title>
                <ion-card-subtitle style="margin-top: 1%;margin-left:2%;font-size: 100%;text-transform: lowercase;">
                    Select transfer type
                </ion-card-subtitle>
            </ion-card>

        </div>
        <ion-card class="flex-column-center" style="margin: 0px;background:none;box-shadow: none;padding-bottom: 3%;">

            <!-- TRANSFER CHOICES -->
            <ion-chip style="height: 85px;width: 85%;padding: 8%;padding-left: 10%;" v-for="choice in sendChoices" :key="choice.name">
                <ion-icon :icon="choice.icon" style="scale: 2.9;color: black;"></ion-icon>
                <div class="flex-column-start" style="padding: 6%;">
                    <ion-label style="font-size: larger;margin-left: 6%;font-weight: bold;margin: 6px;">{{choice.name}}</ion-label>
                    <ion-label style="font-size: x-small;margin-left: 6%;">{{choice.description}}</ion-label>
                </div>
            </ion-chip>

        </ion-card>

        
      </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">

const props = defineProps<{
    isTransferModalOpen:boolean
}>()

// async function canDismiss(data?: any, role?: string) {
//     return role !== 'gesture';
//   }
const sendChoices:{name:string,description:string,default:boolean,icon:string}[] = [
    {
        name:'Email',
        description:'Instant transfer to users registered on Vyre (no fees charged)',
        icon:ioniconsMail,
        default:true
    },
    {
        name:'Blockchain Address',
        description:'Transfer to blockchain address (includes transaction fees)',
        icon:ioniconsLogoBitcoin,
        default:false
    },
    {
        name:'Mobile Money',
        description:'Transfer to MTN Mobile Money wallet',
        icon:ioniconsCash,
        default:false
    },
    {
        name:'Bank Account',
        description:'Transfer to bank account (incurs charges)',
        icon:ioniconsWallet,
        default:false
    }
]



</script>
<style scoped>
 /* ion-content {
    --background: linear-gradient(45deg, rgba(255,0,0,0), #1B1D30);
 } */
 ion-segment {
    --background: rgba(66, 65, 65, 0.446);
} 
ion-segment-button::part(indicator-background) {
    background: #1B1D30;
}
  .segment-button-checked.ios::part(native) {
    color:#1B1D30;
} 

.flex-row-start{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
.flex-column-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.flex-column-start{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>