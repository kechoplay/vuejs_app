const numberWithCommas = (number) => {
    if (number) {
      return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
};

const timeOptions = [
    {
       text : "1日",
       value : 1
    },
    {
       text : "1週間",
       value : 2
    },
    {
       text : "1ヶ月",
       value : 3
    },
    {
       text : "3ヶ月",
       value : 4
    },
    {
       text : "6ヶ月",
       value : 5
    },
    {
       text : "1年",
       value : 6
    }
]

const tags = [
   {
       text: '資金調達',
       color: '#99BFF7'
   },
   {
       text: '新規参加',
       color: '#9F7FED'
   },
   {
       text: '運営から',
       color: '#339967'
   },
   {
       text: 'アラート',
       color: '#F26893'
   }
]

const selectMonths = () => {
   const listMonths = [];
   for( let i = 1; i < 13; i++ ) {
      listMonths.push({
         text: i,
         value: i
      })
   }
   return listMonths;
}

const selectYears = () => {
   const listYears = [];
   const year = new Date().getFullYear();
   for( let i = 0; i < 99; i++ ) {
      listYears.push({
         text: year - i,
         value: year - i
      })
   }
   return listYears;
}

export {
   numberWithCommas,
   timeOptions,
   tags,
   selectMonths,
   selectYears
}