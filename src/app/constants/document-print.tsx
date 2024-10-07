export const printPageStyle = `
    @media print {     
     html, body {
          margin: 0 !important;
          height: 100% !important;
          width: 100% !important;
        }
    
      /* Hide scrollbars but allow scrolling */
      ::-webkit-scrollbar {
        display: none;
      }
      
      /* For Firefox */
      html, body {
        scrollbar-width: none;
      }

      /* Hide default browser print headers and footers */
      @page {
        margin: 0;
      }
    }
  `;
