import React from "react";

const SmartMakieta = () => {
  return (
    <div id="smart-makieta" className="h-full w-full">
      <script
        src="https://3destatesmartmakietaemb.z6.web.core.windows.net/v1/js/main.js"
        onLoad="(function(){SM.init('bd958a70-0f49-4ae6-a49d-af6209732db4', 'smart-makieta', {}, { location: true,
          gallery: true,
          showPrice: true,
          logoMain: true,
          openFilter: true,
          showFullscreenButton: true,
          flatFileAsOverlay: true,
          showFiltersBuilding: true,
          useOldBuildingButtonsLayout: true,
          contactFormPhoneOptional: true,
          contactFormFullNameOptional: true,
          }
      )})()"
      ></script>
    </div>
  );
};

export default SmartMakieta;
