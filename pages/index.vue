<template>
    <main>
      <div class="a4-container mx-auto mt-10 bg-white p-8 shadow-custom">
        <Cvhead/>
        <div class="flex">
          <Cvaside class="basis-1/4"/>
          <Cvmain class="basis-3/4"/>
        </div>
        </div>
    </main>
</template>
<style scoped>
.a4-container {
  aspect-ratio: 1 / 1.414;
  width: 100%; 
  max-width: 100%;
  height: auto; 
}

.shadow-custom {
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -2px rgba(0, 0, 0, 0.05); 
}

@media (min-width: 640px) {
  .a4-container {
    width: 210mm; 
    height: 297mm; 
    margin-top: 24px;
  }
}
</style>