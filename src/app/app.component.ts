import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'test-app';

  constructor(private title: Title) {}

  productOptions: any = [
    {
      name: 'Material',
      optdescription: '',
      variants: [
        {
          variant_name: 'Metal',
          var_key: 'mtl',
          status: true,
        },
        {
          variant_name: 'Wood',
          var_key: 'wd',
          status: true,
        },
      ],
    },
    {
      name: 'Color',
      optdescription: '',
      variants: [
        {
          variant_name: 'Red',
          var_key: 'rd',
          status: true,
        },
        {
          variant_name: 'Green',
          var_key: 'grn',
          status: true,
        },
        {
          variant_name: 'Blue',
          var_key: 'bl',
          status: true,
        },
      ],
    },
    {
      name: 'Size',
      optdescription: '',
      variants: [
        {
          variant_name: 'Small',
          var_key: 'sm',
          status: true,
        },
        {
          variant_name: 'Medium',
          var_key: 'md',
          status: true,
        },
        {
          variant_name: 'Large',
          var_key: 'lg',
          status: true,
        },
      ],
    },
  ];

  productArticleList: any = [
    {
      material: 'Metal',
      var_key: 'sm',
      status: true,
      id: 1,
      default: true,
      article_auto: 'mtl-rd-sm',
      article_custom: '',
      color: 'Red',
      size: 'Small',
    },
    {
      material: 'Metal',
      var_key: 'md',
      status: false,
      id: 2,
      default: false,
      article_auto: 'mtl-rd-md',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
    },
    {
      material: 'Metal',
      var_key: 'lg',
      status: true,
      id: 3,
      default: false,
      article_auto: 'mtl-rd-lg',
      article_custom: '',
      color: 'Red',
      size: 'Large',
    },
    {
      material: 'Metal',
      var_key: 'sm',
      status: false,
      id: 4,
      default: false,
      article_auto: 'mtl-grn-sm',
      article_custom: '',
      color: 'Green',
      size: 'Small',
    },
    {
      material: 'Metal',
      var_key: 'md',
      status: true,
      id: 5,
      default: false,
      article_auto: 'mtl-grn-md',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
    },
    {
      material: 'Metal',
      var_key: 'lg',
      status: true,
      id: 6,
      default: false,
      article_auto: 'mtl-grn-lg',
      article_custom: '',
      color: 'Green',
      size: 'Large',
    },
    {
      material: 'Metal',
      var_key: 'sm',
      status: true,
      id: 7,
      default: false,
      article_auto: 'mtl-bl-sm',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
    },
    {
      material: 'Metal',
      var_key: 'md',
      status: false,
      id: 8,
      default: false,
      article_auto: 'mtl-bl-md',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
    },
    {
      material: 'Metal',
      var_key: 'lg',
      status: true,
      id: 9,
      default: false,
      article_auto: 'mtl-bl-lg',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
    },
    {
      material: 'Wood',
      var_key: 'sm',
      status: true,
      id: 10,
      default: false,
      article_auto: 'wd-rd-sm',
      article_custom: '',
      color: 'Red',
      size: 'Small',
    },
    {
      material: 'Wood',
      var_key: 'md',
      status: true,
      id: 11,
      default: false,
      article_auto: 'wd-rd-md',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
    },
    {
      material: 'Wood',
      var_key: 'lg',
      status: true,
      id: 12,
      default: false,
      article_auto: 'wd-rd-lg',
      article_custom: '',
      color: 'Red',
      size: 'Large',
    },
    {
      material: 'Wood',
      var_key: 'sm',
      status: true,
      id: 13,
      default: false,
      article_auto: 'wd-grn-sm',
      article_custom: '',
      color: 'Green',
      size: 'Small',
    },
    {
      material: 'Wood',
      var_key: 'md',
      status: false,
      id: 14,
      default: false,
      article_auto: 'wd-grn-md',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
    },
    {
      material: 'Wood',
      var_key: 'lg',
      status: true,
      id: 15,
      default: false,
      article_auto: 'wd-grn-lg',
      article_custom: '',
      color: 'Green',
      size: 'Large',
    },
    {
      material: 'Wood',
      var_key: 'sm',
      status: true,
      id: 16,
      default: false,
      article_auto: 'wd-bl-sm',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
    },
    {
      material: 'Wood',
      var_key: 'md',
      status: false,
      id: 17,
      default: false,
      article_auto: 'wd-bl-md',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
    },
    {
      material: 'Wood',
      var_key: 'lg',
      status: false,
      id: 18,
      default: false,
      article_auto: 'wd-bl-lg',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
    },
  ];

  selectedMaterial: string | null = null;
  selectedMaterialKey: string | null = null;

  selectedColor: string | null = null;
  selectedColorKey: string | null = null;

  selectedSize: string | null = null;
  selectedSizeKey: string | null = null;

  selectedArticleKey: string | null = null;

  // buttonMap: any = {
  //   Metal: { key: '', status: true },
  //   Wood: { key: '', status: true },
  //   Red: { key: '', status: true },
  //   Green: { key: '', status: true },
  //   Blue: { key: '', status: true },
  //   Small: { key: '', status: true },
  //   Medium: { key: '', status: true },
  //   Large: { key: '', status: true },
  // };

  // ngOnInit(): void {
  //   this.title.setTitle(this.pageTitle);

  //   const selectedArticle = this.productArticleList.find((article: any) => {
  //     return article.default === true;
  //   });
  //   const splitedArticleData = selectedArticle.article_auto.split('-');
  //   this.selectedArticleKey = selectedArticle.article_auto;
  //   this.selectedMaterialKey = splitedArticleData[0];
  //   this.selectedColorKey = splitedArticleData[1];
  //   this.selectedSizeKey = splitedArticleData[2];

  //   this.generateButtonMapKeys();
  // }

  // generateButtonMapKeys() {
  //   const keyMappings: any = {
  //     Metal: `mtl-${this.selectedColorKey}-${this.selectedSizeKey}`,
  //     Wood: `wd-${this.selectedColorKey}-${this.selectedSizeKey}`,
  //     Red: `${this.selectedMaterialKey}-rd-${this.selectedSizeKey}`,
  //     Green: `${this.selectedMaterialKey}-grn-${this.selectedSizeKey}`,
  //     Blue: `${this.selectedMaterialKey}-bl-${this.selectedSizeKey}`,
  //     Small: `${this.selectedMaterialKey}-${this.selectedColorKey}-sm`,
  //     Medium: `${this.selectedMaterialKey}-${this.selectedColorKey}-md`,
  //     Large: `${this.selectedMaterialKey}-${this.selectedColorKey}-lg`,
  //   };

  //   for (const buttonName in this.buttonMap) {
  //     if (this.buttonMap.hasOwnProperty(buttonName)) {
  //       const key = keyMappings[buttonName];
  //       if (key) {
  //         this.buttonMap[buttonName].key = key;
  //         const article = this.productArticleList.find(
  //           (item: any) => item.article_auto === key
  //         );
  //         this.buttonMap[buttonName].status = article
  //           ? article.status
  //           : 'unknown';
  //       }
  //     }
  //   }

  //   console.log(this.buttonMap);
  // }

  // selectVariant(option: any, selectedVariant: any): void {
  //   const { name } = option;
  //   const { var_key: selectedVarKey, variant_name: selectedVariantName } =
  //     selectedVariant;

  //   switch (name) {
  //     case 'Material':
  //       this.selectedMaterialKey = selectedVarKey;
  //       this.selectedMaterial = selectedVariantName;
  //       break;

  //     case 'Color':
  //       this.selectedColorKey = selectedVarKey;
  //       this.selectedColor = selectedVariantName;
  //       break;

  //     case 'Size':
  //       this.selectedSizeKey = selectedVarKey;
  //       this.selectedSize = selectedVariantName;
  //       break;

  //     default:
  //       return;
  //   }

  //   this.selectedArticleKey = `${this.selectedMaterialKey}-${this.selectedColorKey}-${this.selectedSizeKey}`;

  //   const selectedArticle = this.productArticleList.find(
  //     (item: any) => item.article_auto === this.selectedArticleKey
  //   );

  //   if (selectedArticle && !selectedArticle.status) {
  //     const relevantProduct = this.productArticleList.find((item: any) => {
  //       return (
  //         item.status &&
  //         ((name === 'Material' && item.material === this.selectedMaterial) ||
  //           (name === 'Color' && item.color === this.selectedColor) ||
  //           (name === 'Size' && item.size === this.selectedSize))
  //       );
  //     });

  //     if (relevantProduct) {
  //       const [materialKey, colorKey, sizeKey] =
  //         relevantProduct.article_auto.split('-');
  //       this.selectedArticleKey = relevantProduct.article_auto;
  //       this.selectedMaterialKey = materialKey;
  //       this.selectedColorKey = colorKey;
  //       this.selectedSizeKey = sizeKey;
  //     }
  //   }
  //   this.generateButtonMapKeys();
  // }

  // <--------   new code   -------->

  productOptions2: any = [
    {
      name: 'Material',
      optdescription: '',
      variants: [
        {
          variant_name: 'Metal',
          var_key: 'mtl',
          status: true,
        },
        {
          variant_name: 'Wood',
          var_key: 'wd',
          status: true,
        },
      ],
    },
    {
      name: 'Color',
      optdescription: '',
      variants: [
        {
          variant_name: 'Red',
          var_key: 'rd',
          status: true,
        },
        {
          variant_name: 'Green',
          var_key: 'grn',
          status: true,
        },
        {
          variant_name: 'Blue',
          var_key: 'bl',
          status: true,
        },
      ],
    },
    {
      name: 'Size',
      optdescription: '',
      variants: [
        {
          variant_name: 'Small',
          var_key: 'sm',
          status: true,
        },
        {
          variant_name: 'Medium',
          var_key: 'md',
          status: true,
        },
        {
          variant_name: 'Large',
          var_key: 'lg',
          status: true,
        },
      ],
    },
    {
      name: 'Brand',
      optdescription: '',
      variants: [
        {
          variant_name: 'Apple',
          var_key: 'apl',
          status: true,
        },
        {
          variant_name: 'Microsoft',
          var_key: 'ms',
          status: true,
        },
      ],
    },
  ];

  productArticleList2: any = [
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 1,
      default: true,
      article_auto: 'mtl-rd-sm-apl',
      article_custom: '',
      color: 'Red',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 2,
      default: false,
      article_auto: 'mtl-rd-sm-ms',
      article_custom: '',
      color: 'Red',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 3,
      default: false,
      article_auto: 'mtl-rd-md-apl',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 4,
      default: false,
      article_auto: 'mtl-rd-md-ms',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 5,
      default: false,
      article_auto: 'mtl-rd-lg-apl',
      article_custom: '',
      color: 'Red',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 6,
      default: false,
      article_auto: 'mtl-rd-lg-ms',
      article_custom: '',
      color: 'Red',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 7,
      default: false,
      article_auto: 'mtl-rd-xl-apl',
      article_custom: '',
      color: 'Red',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 8,
      default: false,
      article_auto: 'mtl-rd-xl-ms',
      article_custom: '',
      color: 'Red',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 9,
      default: false,
      article_auto: 'mtl-grn-sm-apl',
      article_custom: '',
      color: 'Green',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 10,
      default: false,
      article_auto: 'mtl-grn-sm-ms',
      article_custom: '',
      color: 'Green',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 11,
      default: false,
      article_auto: 'mtl-grn-md-apl',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 12,
      default: false,
      article_auto: 'mtl-grn-md-ms',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 13,
      default: false,
      article_auto: 'mtl-grn-lg-apl',
      article_custom: '',
      color: 'Green',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 14,
      default: false,
      article_auto: 'mtl-grn-lg-ms',
      article_custom: '',
      color: 'Green',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 15,
      default: false,
      article_auto: 'mtl-grn-xl-apl',
      article_custom: '',
      color: 'Green',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 16,
      default: false,
      article_auto: 'mtl-grn-xl-ms',
      article_custom: '',
      color: 'Green',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 17,
      default: false,
      article_auto: 'mtl-bl-sm-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 18,
      default: false,
      article_auto: 'mtl-bl-sm-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 19,
      default: false,
      article_auto: 'mtl-bl-md-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 20,
      default: false,
      article_auto: 'mtl-bl-md-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 21,
      default: false,
      article_auto: 'mtl-bl-lg-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 22,
      default: false,
      article_auto: 'mtl-bl-lg-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Metal',
      var_key: 'apl',
      status: true,
      id: 23,
      default: false,
      article_auto: 'mtl-bl-xl-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Metal',
      var_key: 'ms',
      status: true,
      id: 24,
      default: false,
      article_auto: 'mtl-bl-xl-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 25,
      default: false,
      article_auto: 'wd-rd-sm-apl',
      article_custom: '',
      color: 'Red',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 26,
      default: false,
      article_auto: 'wd-rd-sm-ms',
      article_custom: '',
      color: 'Red',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 27,
      default: false,
      article_auto: 'wd-rd-md-apl',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 28,
      default: false,
      article_auto: 'wd-rd-md-ms',
      article_custom: '',
      color: 'Red',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 29,
      default: false,
      article_auto: 'wd-rd-lg-apl',
      article_custom: '',
      color: 'Red',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 30,
      default: false,
      article_auto: 'wd-rd-lg-ms',
      article_custom: '',
      color: 'Red',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 31,
      default: false,
      article_auto: 'wd-rd-xl-apl',
      article_custom: '',
      color: 'Red',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 32,
      default: false,
      article_auto: 'wd-rd-xl-ms',
      article_custom: '',
      color: 'Red',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 33,
      default: false,
      article_auto: 'wd-grn-sm-apl',
      article_custom: '',
      color: 'Green',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 34,
      default: false,
      article_auto: 'wd-grn-sm-ms',
      article_custom: '',
      color: 'Green',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 35,
      default: false,
      article_auto: 'wd-grn-md-apl',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 36,
      default: false,
      article_auto: 'wd-grn-md-ms',
      article_custom: '',
      color: 'Green',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 37,
      default: false,
      article_auto: 'wd-grn-lg-apl',
      article_custom: '',
      color: 'Green',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 38,
      default: false,
      article_auto: 'wd-grn-lg-ms',
      article_custom: '',
      color: 'Green',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 39,
      default: false,
      article_auto: 'wd-grn-xl-apl',
      article_custom: '',
      color: 'Green',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 40,
      default: false,
      article_auto: 'wd-grn-xl-ms',
      article_custom: '',
      color: 'Green',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 41,
      default: false,
      article_auto: 'wd-bl-sm-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 42,
      default: false,
      article_auto: 'wd-bl-sm-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Small',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 43,
      default: false,
      article_auto: 'wd-bl-md-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 44,
      default: false,
      article_auto: 'wd-bl-md-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Medium',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 45,
      default: false,
      article_auto: 'wd-bl-lg-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 46,
      default: false,
      article_auto: 'wd-bl-lg-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Large',
      brand: 'Microsoft',
    },
    {
      material: 'Wood',
      var_key: 'apl',
      status: true,
      id: 47,
      default: false,
      article_auto: 'wd-bl-xl-apl',
      article_custom: '',
      color: 'Blue',
      size: 'Extra Large',
      brand: 'Apple',
    },
    {
      material: 'Wood',
      var_key: 'ms',
      status: true,
      id: 48,
      default: false,
      article_auto: 'wd-bl-xl-ms',
      article_custom: '',
      color: 'Blue',
      size: 'Extra Large',
      brand: 'Microsoft',
    },
  ];

  selectedProduct: any = null;
  buttonMap: any = [];

  ngOnInit(): void {
    this.productOptions2.forEach((category: any) => {
      const categoryName = category.name;

      category.variants.forEach((variant: any) => {
        const buttonInfo = {
          key: variant.var_key,
          name: variant.variant_name,
          selected: false,
          category: categoryName,
        };

        this.buttonMap.push(buttonInfo);
      });
    });

    this.selectedProduct = this.productArticleList2.find(
      (product: any) => product.default === true
    );

    if (this.selectedProduct) {
      const articleAuto = this.selectedProduct.article_auto;
      const articleParts = articleAuto.split('-');

      this.buttonMap.forEach((button: any) => {
        if (articleParts.includes(button.key)) {
          button.selected = true;
        }
      });
    }

    // this is a temporary buttonMap idea which could be used to create a compariosn wit article json

    // this.buttonMap = [
    //   {
    //     key: 'mtl',
    //     name: 'Metal',
    //     selected: true,
    //     category: 'Material',
    //     article_key: 'mtl-rd-sm-apl',
    //   },
    //   {
    //     key: 'wd',
    //     name: 'Wood',
    //     selected: false,
    //     category: 'Material',
    //     article_key: 'wd-rd-sm-apl',
    //   },
    //   {
    //     key: 'rd',
    //     name: 'Red',
    //     selected: true,
    //     category: 'Color',
    //     article_key: 'mtl-rd-sm-apl',
    //   },
    //   {
    //     key: 'grn',
    //     name: 'Green',
    //     selected: false,
    //     category: 'Color',
    //     article_key: 'mtl-grn-sm-apl',
    //   },
    //   {
    //     key: 'bl',
    //     name: 'Blue',
    //     selected: false,
    //     category: 'Color',
    //     article_key: 'mtl-bl-sm-apl',
    //   },
    //   {
    //     key: 'sm',
    //     name: 'Small',
    //     selected: true,
    //     category: 'Size',
    //     article_key: 'mtl-rd-sm-apl',
    //   },
    //   {
    //     key: 'md',
    //     name: 'Medium',
    //     selected: false,
    //     category: 'Size',
    //     article_key: 'mtl-rd-md-apl',
    //   },
    //   {
    //     key: 'lg',
    //     name: 'Large',
    //     selected: false,
    //     category: 'Size',
    //     article_key: 'mtl-rd-lg-apl',
    //   },
    //   {
    //     key: 'apl',
    //     name: 'Apple',
    //     selected: true,
    //     category: 'Brand',
    //     article_key: 'mtl-rd-sm-apl',
    //   },
    //   {
    //     key: 'ms',
    //     name: 'Microsoft',
    //     selected: false,
    //     category: 'Brand',
    //     article_key: 'mtl-rd-sm-ms',
    //   },
    // ];

    console.log(this.buttonMap);
    console.log(this.selectedProduct);
  }

  isVariantSelected(variantKey: string): boolean {
    const selectedVariant = this.buttonMap.find(
      (item: any) => item.key === variantKey
    );
    return selectedVariant ? selectedVariant.selected : false;
  }

  isVariantDisabled(variantKey: string): boolean {
    // need to come up with a solution which will updated status of all the button based on the status of article provided in productvariants json
    return false;
  }

  selectVariant2(option: any, variant: any): void {
    const previouslySelectedButton = this.buttonMap.find((item: any) => {
      return item.category === option.name && item.selected;
    });

    if (previouslySelectedButton) {
      previouslySelectedButton.selected = false;
    }

    const selectedButton = this.buttonMap.find((item: any) => {
      return item.category === option.name && item.key === variant.var_key;
    });

    if (selectedButton) {
      selectedButton.selected = true;
      this.selectedProduct = this.productArticleList2.find(
        (item: any) => item.article_auto === selectedButton.article_key
      );
    }

    console.log(this.selectedProduct);

    // here if selectedProuct has status as false can set other relevant proudct as default

    // it won't work right now as there is no default varibles set to comparte products with each other using article key

    //   if (this.selectedProduct && !this.selectedProduct.status) {
    //     const relevantProduct = this.productArticleList2.find((item: any) => {
    //       return (
    //         item.status &&
    //         ((option === 'Material' && item.material === this.selectedMaterial) ||
    //           (option === 'Color' && item.color === this.selectedColor) ||
    //           (option === 'Size' && item.size === this.selectedSize))
    //       );
    //     });

    //     if (relevantProduct) {
    //       const [materialKey, colorKey, sizeKey] =
    //         relevantProduct.article_auto.split('-');
    //       this.selectedArticleKey = relevantProduct.article_auto;
    //       this.selectedMaterialKey = materialKey;
    //       this.selectedColorKey = colorKey;
    //       this.selectedSizeKey = sizeKey;
    //     }
    //   }
  }
}
