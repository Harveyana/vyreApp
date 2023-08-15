<template>
  <ion-app>
    <ion-router-outlet />
    <!-- <accout-created-modal :is-acc-created-modal-open="isAccCreatedModalOpen" @closeModal="setAccCreatedModal(false)"/> -->
  </ion-app>
</template>
<!-- <script setup lang="ts">
import { App, URLOpenListenerEvent } from '@capacitor/app';
const {confirmUser} = useRealmAuth()
const isAccCreatedModalOpen = ref<boolean>(false)

const setAccCreatedModal = (isOpen:boolean)=> {
  isAccCreatedModalOpen.value = isOpen;
}
// const ionRouter = useIonRouter();
// const route = useRoute()

App.addListener('appUrlOpen', async(event: URLOpenListenerEvent)=> {
  // Example url: https://vyre.app?token=hfgdjdkdgeroiehy
  // slug = /tabs/tabs2
  // const slug = event.url.split('.app').pop();

  // Create a URL object to work with the URL and query parameters
  const urlObj = new URL(event.url);

  // Get the query parameters from the URL
  const queryParams = new URLSearchParams(urlObj.search);
  // Get the value of the "token" query parameter
  const token = queryParams.get("token");
  const tokenId = queryParams.get("tokenId");

  if (token !== null && tokenId !== null) {

  await confirmUser(token, tokenId);

  setAccCreatedModal(true)

  } 

  // await confirmUser(token,tokenId)

  // console.log("Token:", token);

  // We only push to the route if there is a slug present
  // ionRouter.push('/home2')

});

</script> -->
<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */

</style>