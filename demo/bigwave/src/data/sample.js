window.poolPayload = {
  blockchain: {
    eth_bgwt: "0.000"
  },
  depositTokens: [
    {
      name: "eth",
      icon: "src/img/symbols/eth.png"
    },
  ],
  __data: {
    availableLanguages: [
      {
        id: "en",
        icon: "src/img/symbols/iso-flags/gbr.svg",
        name: "English"
      },
      {
        id: "ch",
        icon: "src/img/symbols/iso-flags/chn.svg",
        name: "汉语"
      },
      {
        id: "ru",
        icon: "src/img/symbols/iso-flags/rus.svg",
        name: "русский язык"
      }
    ],
    en: {
      social: [
        {
          link: "#",
          icon: "fas fa-mail-bulk"
        },
        {
          link: "#",
          icon: "fab fa-reddit-alien"
        },
        {
          link: "#",
          icon: "fab fa-discord"
        },
        {
          link: "#",
          icon: "fab fa-twitter"
        },
        {
          link: "#",
          icon: "fab fa-medium-m"
        },
        {
          link: "#",
          icon: "fab fa-slack"
        },
        {
          link: "#",
          icon: "fab fa-github"
        },
        {
          link: "#",
          icon: "fab fa-vimeo-v"
        }
      ],
      token: {
        name: "BGW-T",
        name_long: "BigWave Token"
      },
      ui: {
        menu: [
          {
            title: "Stake",
            class: "link",
            link: "",
            click: "stakingManager()",
            icon: "", id: "", style: ""
          },
          {
            title: "Governance",
            class: "link",
            link: "",
            click: "governanceInspector()",
            icon: "", id: "", style: ""
          },
          {
            title: "Docs",
            class: "link",
            link: "#",
            click: "",
            icon: "", id: "", style: ""
          },
          {
            title: "",
            span: [
              {
                title: "",
                class: "desktop-only",
                icon: [
                  {
                    class: "fas fa-adjust"
                  }
                ]
              },
              {
                title: "Light Theme",
                class: "mobile-only",
                icon: []
              }
            ],
            class: "link-btn dark-only",
            link: "",
            click: "setThemeLight()",
            icon: "", id: "", style: ""
          },
          {
            title: "",
            span: [
              {
                title: "",
                class: "desktop-only",
                icon: [
                  {
                    class: "fas fa-adjust"
                  }
                ]
              },
              {
                title: "Dark Theme",
                class: "mobile-only",
                icon: []
              }
            ],
            class: "link-btn light-only",
            link: "",
            click: "setThemeDark()",
            icon: "", id: "", style: ""
          },
          {
            title: "",
            span: [
              {
                title: "",
                class: "desktop-only",
                icon: [
                  {
                    class: "fas fa-wallet"
                  }
                ]
              },
              {
                title: "Link Wallet",
                class: "mobile-only",
                icon: []
              }
            ],
            class: "link-btn btn-connect",
            link: "",
            click: "onConnect()",
            icon: "", id: "", style: ""
          },
          {
            title: "",
            span: [
              {
                title: "",
                class: "desktop-only",
                icon: [
                  {
                    class: "fas fa-unlink"
                  }
                ]
              },
              {
                title: "Un-Link Wallet",
                class: "mobile-only",
                icon: []
              }
            ],
            class: "link-btn",
            link: "",
            click: "onDisconnect()",
            icon: "", id: "btn-disconnect", style: "display:none;"
          }
        ],
        buttons: {
          deposit: "Deposit",
          withdraw: "Withdraw"
        },
        labels: {
          connect: "Connect Wallet",
          helpConnect: "Connect your wallet to complete this transaction."
        }
      }
    }
  },
  tokens: [

    {
      tid: "TST0",
      name: "Test pool (ab token)",
      icon: "src/img/symbols/0.png",
      value: "1.01",
      "24hr-change-percent": "1.8",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        1.3,
        2,
        2.1,
        2.3,
        1.7,
        1.6,
        1.1,
        2.1,
        4,
        3.4,
        4.1,
        2.2,
        2.3,
        2.4,
        2.3,
        2.2,
        2.1,
        2,
        2,
        2.1,
        2.1,
        1.8,
        1.2,
        1
      ],
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      staking: {
        start: "February 02, 2021, 11:00 PM UTC",
        end: "May 02, 2021, 10:00 PM UTC",
        balance: "15418527",
        rate: "500",
        volume: "16154185",
        tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
      }
    },
    {
      tid: "TScT1",
      name: "Test pool (cd token)",
      icon: "src/img/symbols/1.png",
      value: "6.34",
      "24hr-change-percent": "-15.6",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      staking: {
        start: "February 02, 2021, 11:00 PM UTC",
        end: "May 02, 2021, 10:00 PM UTC",
        balance: "15418527",
        rate: "500",
        volume: "16154185",
        tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
      },
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        6,
        8,
        11,
        9,
        11,
        7,
        4,
        10,
        8,
        11,
        4,
        10,
        7,
        12,
        9,
        11,
        5,
        8,
        8,
        7,
        11,
        11,
        7,
        6
      ]
    },
    {
      tid: "TST2",
      name: "Test pool (ef token)",
      icon: "src/img/symbols/2.png",
      value: "3.22",
      "24hr-change-percent": "0.01",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        4,
        9,
        5,
        0,
        6,
        1,
        2,
        4,
        1,
        3,
        6,
        10,
        4,
        2,
        3,
        1,
        4,
        0,
        4,
        1,
        5,
        1,
        3,
        1
      ]
    },
    {
      tid: "TST3",
      name: "Test pool (gh token)",
      icon: "src/img/symbols/3.png",
      value: "5.1",
      "24hr-change-percent": "2.5",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        160,
        287,
        318,
        54,
        193,
        141,
        170,
        6,
        167,
        124,
        84,
        313,
        37,
        376,
        148,
        4,
        166,
        207,
        353,
        63,
        33,
        163,
        381,
        5
      ]
    },
    {
      tid: "TST4",
      name: "Test pool (ij token)",
      icon: "src/img/symbols/4.png",
      value: "1",
      "24hr-change-percent": "-1.8",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        5,
        7,
        0,
        5,
        1,
        2,
        2,
        5,
        1,
        5,
        3,
        0,
        1,
        10,
        9,
        1,
        4,
        3,
        10,
        0,
        5,
        5,
        2,
        1
      ]
    },
    {
      tid: "TST5",
      name: "Test pool (kl token)",
      icon: "src/img/symbols/5.png",
      value: "1.2",
      "24hr-change-percent": "1.8",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        1.3,
        2,
        2.1,
        2.3,
        1.7,
        1.6,
        1.1,
        2.1,
        4,
        3.4,
        4.1,
        2.2,
        2.3,
        2.4,
        2.3,
        2.2,
        2.1,
        2,
        2,
        2.1,
        2.1,
        1.8,
        1.2,
        1
      ]
    },
    {
      tid: "TST6",
      name: "Test pool (mn token)",
      icon: "src/img/symbols/6.png",
      value: "6.2",
      "24hr-change-percent": "-15.6",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        6,
        8,
        11,
        9,
        11,
        7,
        4,
        10,
        8,
        11,
        4,
        10,
        7,
        12,
        9,
        11,
        5,
        8,
        8,
        7,
        11,
        11,
        7,
        6
      ]
    },
    {
      tid: "TST7",
      name: "Test pool (op token)",
      icon: "src/img/symbols/7.png",
      value: "1.34",
      "24hr-change-percent": "0.01",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        4,
        9,
        5,
        0,
        6,
        1,
        2,
        4,
        1,
        3,
        6,
        10,
        4,
        2,
        3,
        1,
        4,
        0,
        4,
        1,
        5,
        1,
        3,
        1
      ]
    },
    {
      tid: "TST8",
      name: "Test pool (qr token)",
      icon: "src/img/symbols/8.png",
      value: "25.4",
      "24hr-change-percent": "2.5",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        160,
        287,
        318,
        54,
        193,
        141,
        170,
        6,
        167,
        124,
        84,
        313,
        37,
        376,
        148,
        4,
        166,
        207,
        353,
        63,
        33,
        163,
        381,
        25
      ]
    },
    {
      tid: "TST9",
      name: "Test pool (st token)",
      icon: "src/img/symbols/9.png",
      value: "0.34",
      "24hr-change-percent": "-1.8",
      "market-cap": "1200000",
      volume: "800000",
      address: "0xTYV000UIO",
      supply: "2900000",
      assets: [
        {
          name: "ABC",
          colour: "#00be4e",
          icon: "src/img/symbols/2.png",
          pc: "20",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "DEF",
          colour: "#0091be",
          icon: "src/img/symbols/3.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "GHI",
          colour: "#be8f00",
          icon: "src/img/symbols/4.png",
          pc: "5",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "JKL",
          colour: "#be4700",
          icon: "src/img/symbols/5.png",
          pc: "30",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "MNO",
          colour: "#0027be",
          icon: "src/img/symbols/6.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "PQR",
          colour: "#2a00be",
          icon: "src/img/symbols/7.png",
          pc: "10",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "STU",
          colour: "#00be4e",
          icon: "src/img/symbols/8.png",
          pc: "14",
          amount: "1200995",
          value: "90000"
        },
        {
          name: "VWX",
          colour: "#5f00be",
          icon: "src/img/symbols/9.png",
          pc: "1",
          amount: "1200995",
          value: "90000"
        }
      ],
      trades: [
        {
          time: "1615498527",
          input: "2043",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          input: "",
          type: "sell",
          output: "2043",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          input: "43",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          input: "20",
          type: "buy",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615418527",
          input: "",
          type: "sell",
          output: "204",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      swaps: [
        {
          time: "1615418527",
          input: "12",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615388527",
          input: "",
          output: "56",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615358527",
          input: "1",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615318527",
          input: "2",
          output: "",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615298527",
          input: "",
          output: "80",
          currency: "ETH",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ],
      details: [],
      "7d-average": [
        2.1,
        3.1,
        2.5,
        1.5,
        1.6,
        2.2,
        2.1
      ],
      "24hr-average": [
        5,
        7,
        0,
        5,
        1,
        2,
        2,
        5,
        1,
        5,
        3,
        0,
        1,
        10,
        9,
        1,
        4,
        3,
        10,
        0,
        5,
        5,
        2,
        1
      ]
    }
  ],
  user: {
    ether:{balance: "0.000"},
    balance: "85075",
    portfolio: {
      "TST0": {
        balance: "4000"
      },
      "TScT1": {
        balance: "75"
      }
    }
  },
  governance: {
    statistics: {
      active: {
        pc: 14,
        value: 104399
      },
      inactive: {
        pc: 30,
        value: 3131970
      },
      delegated: {
        pc: 56,
        value: 5846344
      }
    },
    proposals: [{
      name: "Integrate BIP-888 into contract json",
      required: 1900000,
      for: 104500,
      against: 40539,
      status: "open",
      id: 145369,
      "info-text": "Libero eveniet libero ipsam assumenda veritatis. Quo et blanditiis non. Est sit ut ex similique necessitatibus. Eius deleniti sed veritatis. Voluptatem et qui ea animi voluptas voluptatibus sapiente beatae. Sit occaecati illum quis ipsam molestias sapiente. Dolore illo expedita eum quis qui nihil eaque. Sit harum quo consequatur praesentium ipsum. Laboriosam aliquam quasi facere excepturi consectetur neque. Animi consequatur et repudiandae adipisci ab corporis. Sit sed animi tempora voluptatem ut similique.",
      votes: [
        {
          time: "1615498527",
          value: "2043",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          value: "9084",
          type: "against",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          value: "4305",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "20",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "2000",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ]
    },
    {
      name: "Change token-burning interval to 1 month",
      required: 190000,
      for: 4500,
      against: 539,
      status: "open",
      id: 145368,
      "info-text": "Libero eveniet libero ipsam assumenda veritatis. Quo et blanditiis non. Est sit ut ex similique necessitatibus. Eius deleniti sed veritatis. Voluptatem et qui ea animi voluptas voluptatibus sapiente beatae. Sit occaecati illum quis ipsam molestias sapiente. Dolore illo expedita eum quis qui nihil eaque. Sit harum quo consequatur praesentium ipsum. Laboriosam aliquam quasi facere excepturi consectetur neque. Animi consequatur et repudiandae adipisci ab corporis. Sit sed animi tempora voluptatem ut similique.",
      votes: [
        {
          time: "1615498527",
          value: "2043",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          value: "9084",
          type: "against",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          value: "4305",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "20",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "2000",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ]
    },
    {
      name: "Support direct Ethereum forks",
      required: 190000,
      for: 4500,
      against: 5675639,
      status: "rejected",
      id: 145367,
      "info-text": "Libero eveniet libero ipsam assumenda veritatis. Quo et blanditiis non. Est sit ut ex similique necessitatibus. Eius deleniti sed veritatis. Voluptatem et qui ea animi voluptas voluptatibus sapiente beatae. Sit occaecati illum quis ipsam molestias sapiente. Dolore illo expedita eum quis qui nihil eaque. Sit harum quo consequatur praesentium ipsum. Laboriosam aliquam quasi facere excepturi consectetur neque. Animi consequatur et repudiandae adipisci ab corporis. Sit sed animi tempora voluptatem ut similique.",
      votes: [
        {
          time: "1615498527",
          value: "2043",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          value: "9084",
          type: "against",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          value: "4305",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "20",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "2000",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ]
    },
    {
      name: "Integrate BIP-998",
      required: 190000,
      for: 67463,
      against: 56739,
      status: "passed",
      id: 145366,
      "info-text": "Libero eveniet libero ipsam assumenda veritatis. Quo et blanditiis non. Est sit ut ex similique necessitatibus. Eius deleniti sed veritatis. Voluptatem et qui ea animi voluptas voluptatibus sapiente beatae. Sit occaecati illum quis ipsam molestias sapiente. Dolore illo expedita eum quis qui nihil eaque. Sit harum quo consequatur praesentium ipsum. Laboriosam aliquam quasi facere excepturi consectetur neque. Animi consequatur et repudiandae adipisci ab corporis. Sit sed animi tempora voluptatem ut similique.",
      votes: [
        {
          time: "1615498527",
          value: "2043",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615478527",
          value: "9084",
          type: "against",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615458527",
          value: "4305",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "20",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        },
        {
          time: "1615438527",
          value: "2000",
          type: "for",
          tx: "0x959a2bf324c80540b91ee764ff196da1801176b18ec21399598d6f533241e166"
        }
      ]
    }]
  }
}