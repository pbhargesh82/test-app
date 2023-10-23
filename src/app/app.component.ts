import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app';

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

  materialOptions: any[] = [];
  colorOptions: any[] = [];
  sizeOptions: any[] = [];

  selectedMaterial: string | null = null;
  selectedMaterialKey: string | null = null;
  selectedColor: string | null = null;
  selectedColorKey: string | null = null;
  selectedSize: string | null = null;
  selectedSizeKey: string | null = null;
  selectedArticleKey: string | null = null;

  buttonMap: any = {
    Metal: { key: '', status: true },
    Wood: { key: '', status: true },
    Red: { key: '', status: true },
    Green: { key: '', status: true },
    Blue: { key: '', status: true },
    Small: { key: '', status: true },
    Medium: { key: '', status: true },
    Large: { key: '', status: true },
  };

  ngOnInit(): void {
    this.materialOptions = this.productOptions.find(
      (option: any) => option.name === 'Material'
    )?.variants;

    this.colorOptions = this.productOptions.find(
      (option: any) => option.name === 'Color'
    )?.variants;

    this.sizeOptions = this.productOptions.find(
      (option: any) => option.name === 'Size'
    )?.variants;

    const selectedArticle = this.productArticleList.find((article: any) => {
      return article.default === true;
    });
    const splitedArticleData = selectedArticle.article_auto.split('-');
    this.selectedArticleKey = selectedArticle.article_auto;
    this.selectedMaterialKey = splitedArticleData[0];
    this.selectedColorKey = splitedArticleData[1];
    this.selectedSizeKey = splitedArticleData[2];

    this.generateButtonMapKeys();
  }

  generateButtonMapKeys() {
    const keyMappings: any = {
      Metal: `mtl-${this.selectedColorKey}-${this.selectedSizeKey}`,
      Wood: `wd-${this.selectedColorKey}-${this.selectedSizeKey}`,
      Red: `${this.selectedMaterialKey}-rd-${this.selectedSizeKey}`,
      Green: `${this.selectedMaterialKey}-grn-${this.selectedSizeKey}`,
      Blue: `${this.selectedMaterialKey}-bl-${this.selectedSizeKey}`,
      Small: `${this.selectedMaterialKey}-${this.selectedColorKey}-sm`,
      Medium: `${this.selectedMaterialKey}-${this.selectedColorKey}-md`,
      Large: `${this.selectedMaterialKey}-${this.selectedColorKey}-lg`,
    };

    for (const buttonName in this.buttonMap) {
      if (this.buttonMap.hasOwnProperty(buttonName)) {
        const key = keyMappings[buttonName];
        if (key) {
          this.buttonMap[buttonName].key = key;
          const article = this.productArticleList.find(
            (item: any) => item.article_auto === key
          );
          this.buttonMap[buttonName].status = article
            ? article.status
            : 'unknown';
        }
      }
    }

    console.log(this.buttonMap);
  }

  selectVariant(option: any, selectedVariant: any): void {
    const { name } = option;
    const { var_key: selectedVarKey, variant_name: selectedVariantName } =
      selectedVariant;

    switch (name) {
      case 'Material':
        this.selectedMaterialKey = selectedVarKey;
        this.selectedMaterial = selectedVariantName;
        break;

      case 'Color':
        this.selectedColorKey = selectedVarKey;
        this.selectedColor = selectedVariantName;
        break;

      case 'Size':
        this.selectedSizeKey = selectedVarKey;
        this.selectedSize = selectedVariantName;
        break;

      default:
        return;
    }

    this.selectedArticleKey = `${this.selectedMaterialKey}-${this.selectedColorKey}-${this.selectedSizeKey}`;

    const selectedArticle = this.productArticleList.find(
      (item: any) => item.article_auto === this.selectedArticleKey
    );

    if (selectedArticle && !selectedArticle.status) {
      const relevantProduct = this.productArticleList.find((item: any) => {
        return (
          item.status &&
          ((name === 'Material' && item.material === this.selectedMaterial) ||
            (name === 'Color' && item.color === this.selectedColor) ||
            (name === 'Size' && item.size === this.selectedSize))
        );
      });

      if (relevantProduct) {
        const [materialKey, colorKey, sizeKey] =
          relevantProduct.article_auto.split('-');
        this.selectedArticleKey = relevantProduct.article_auto;
        this.selectedMaterialKey = materialKey;
        this.selectedColorKey = colorKey;
        this.selectedSizeKey = sizeKey;
      }
    }
    this.generateButtonMapKeys();
  }
}
