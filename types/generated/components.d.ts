import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutHeader: Schema.Attribute.String;
    aboutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    aboutText: Schema.Attribute.Text;
    contactUsBtn: Schema.Attribute.String;
    requestQuoteBtn: Schema.Attribute.String;
  };
}

export interface AboutusheroAboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_aboutushero_about_us_heroes';
  info: {
    displayName: 'aboutUsHero';
  };
  attributes: {
    aboutUsHeroDesc: Schema.Attribute.Text;
    aboutUsHeroHeader: Schema.Attribute.String;
    aboutUsHeroImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    canadianBasedText: Schema.Attribute.String;
    smartPrintingText: Schema.Attribute.String;
    trustedExpertiseText: Schema.Attribute.String;
  };
}

export interface AboutuswhyAboutUsWhy extends Struct.ComponentSchema {
  collectionName: 'components_aboutuswhy_about_us_whies';
  info: {
    displayName: 'aboutUsWhy';
  };
  attributes: {
    aboutUsBtn: Schema.Attribute.String;
    aboutusWhyImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    atPrintedDesc: Schema.Attribute.Text;
    printedText: Schema.Attribute.String;
    printSmarterText: Schema.Attribute.String;
    whatSetsApartHeader: Schema.Attribute.String;
    whyChooseDesc: Schema.Attribute.String;
    whyChooseHeader: Schema.Attribute.String;
    withDecadesDesc: Schema.Attribute.Text;
  };
}

export interface ContactusformContactusForm extends Struct.ComponentSchema {
  collectionName: 'components_contactusform_contactus_forms';
  info: {
    displayName: 'contactusForm';
  };
  attributes: {
    Email: Schema.Attribute.String;
    FullName: Schema.Attribute.String;
    Message: Schema.Attribute.Text;
    Phone: Schema.Attribute.String;
    sendmessageBtn: Schema.Attribute.String;
  };
}

export interface ContactusheroContactusHero extends Struct.ComponentSchema {
  collectionName: 'components_contactushero_contactus_heroes';
  info: {
    displayName: 'contactusHero';
  };
  attributes: {
    callusText: Schema.Attribute.String;
    callusTitle: Schema.Attribute.String;
    contactusHeader: Schema.Attribute.String;
    contactusText: Schema.Attribute.String;
    emailText: Schema.Attribute.String;
    emailTitle: Schema.Attribute.String;
  };
}

export interface FeaturedproductsFeaturedProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredproducts_featured_products';
  info: {
    displayName: 'FeaturedProducts';
  };
  attributes: {
    featuredProductsHeader: Schema.Attribute.String;
    integratedFormBtn: Schema.Attribute.String;
    integratedFormImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedFormText: Schema.Attribute.String;
    linerlessLabelBtn: Schema.Attribute.String;
    linerlessLabelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlessLabelTitle: Schema.Attribute.String;
    pressureSealBtn: Schema.Attribute.String;
    pressureSealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressureSealTitle: Schema.Attribute.String;
  };
}

export interface FeaturedpromoproductsFeaturedPromoProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredpromoproducts_featured_promo_products';
  info: {
    displayName: 'FeaturedPromoProducts';
  };
  attributes: {
    featuredpromoBtn: Schema.Attribute.String;
    featuredpromoImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featuredpromoText: Schema.Attribute.Text;
    featuredpromoTitle: Schema.Attribute.String;
  };
}

export interface FeaturedservicesFeaturedServices
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredservices_featured_services';
  info: {
    displayName: 'FeaturedServices';
  };
  attributes: {
    clientBrandedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    clientBrandedTitle: Schema.Attribute.String;
    featuredServicesHeader: Schema.Attribute.String;
    instantProofingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    instantProofingTitle: Schema.Attribute.String;
    warehouseImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    warehouseTitle: Schema.Attribute.String;
  };
}

export interface HighqualityHighQuality extends Struct.ComponentSchema {
  collectionName: 'components_highquality_high_qualities';
  info: {
    displayName: 'highQuality';
  };
  attributes: {
    highQualityBtn: Schema.Attribute.String;
    highQualityHeader: Schema.Attribute.String;
    highQualityImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    highQualityText: Schema.Attribute.Text;
  };
}

export interface HomeheroHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_homehero_home_heroes';
  info: {
    displayName: 'homeHero';
  };
  attributes: {
    heroBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroHeader: Schema.Attribute.String;
    heroText: Schema.Attribute.Text;
    onlineServicesBtn: Schema.Attribute.String;
    onlineServicesHeader: Schema.Attribute.String;
    onlineServicesText: Schema.Attribute.String;
    ourProductsBtn: Schema.Attribute.String;
    ourProductsHeader: Schema.Attribute.String;
    ourProductsText: Schema.Attribute.String;
    promoProductsBtn: Schema.Attribute.String;
    promoProductsHeader: Schema.Attribute.String;
    promoProductsText: Schema.Attribute.String;
  };
}

export interface IntegratedformlabelheroIntegratedformlabelHero
  extends Struct.ComponentSchema {
  collectionName: 'components_integratedformlabelhero_integratedformlabel_heroes';
  info: {
    displayName: 'integratedformlabelHero';
  };
  attributes: {
    integratedformlabelDesc: Schema.Attribute.Text;
    integratedformlabelHeader: Schema.Attribute.String;
    integratedformlabelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface IntegratedformlabelwhatisIntegratedformlabelWhatIs
  extends Struct.ComponentSchema {
  collectionName: 'components_integratedformlabelwhatis_integratedformlabel_what_is';
  info: {
    displayName: 'integratedformlabelWhatIs';
  };
  attributes: {
    integratedformImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformImage3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformlabelWhatIsDesc: Schema.Attribute.Text;
    integratedformlabelWhatIsTitle: Schema.Attribute.String;
    integratedsolutionText: Schema.Attribute.Text;
  };
}

export interface LinerlesslabelheroLinerlesslabelHero
  extends Struct.ComponentSchema {
  collectionName: 'components_linerlesslabelhero_linerlesslabel_heroes';
  info: {
    displayName: 'linerlesslabelHero';
  };
  attributes: {
    linerlessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlesslabelHeader: Schema.Attribute.String;
    linerlesslabelText: Schema.Attribute.Text;
  };
}

export interface LinerlesslabelwhatisLinerlesslabelWhatIs
  extends Struct.ComponentSchema {
  collectionName: 'components_linerlesslabelwhatis_linerlesslabel_what_is';
  info: {
    displayName: 'linerlesslabelWhatIs';
  };
  attributes: {
    linerlesslabelImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlesslabelImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlesslabelImage3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlesslabelWhatIsDesc: Schema.Attribute.Text;
    linerlesslabelWhatIsTitle: Schema.Attribute.String;
    perfectforwindowText: Schema.Attribute.Text;
    printedmanufactureText: Schema.Attribute.Text;
  };
}

export interface MoreproductsMoreProducts extends Struct.ComponentSchema {
  collectionName: 'components_moreproducts_more_products';
  info: {
    displayName: 'MoreProducts';
  };
  attributes: {
    accountingText: Schema.Attribute.Text;
    availableoptionsText: Schema.Attribute.String;
    commonuseText: Schema.Attribute.String;
    continuousImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    continuouspartsText: Schema.Attribute.Text;
    continuousText: Schema.Attribute.Text;
    continuousTitle: Schema.Attribute.String;
    customenvelopeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    customenvelopeTitle: Schema.Attribute.String;
    customsizesText: Schema.Attribute.Text;
    daytodayText: Schema.Attribute.Text;
    deliverbrandfirstTitle: Schema.Attribute.String;
    durableTitle: Schema.Attribute.String;
    featuresText: Schema.Attribute.String;
    fieldserviceText: Schema.Attribute.Text;
    highqualitylaserTitle: Schema.Attribute.String;
    idealforText: Schema.Attribute.String;
    lasercutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    lasercutText: Schema.Attribute.Text;
    lasercutTitle: Schema.Attribute.String;
    moreproductsHeader: Schema.Attribute.String;
    multipartText: Schema.Attribute.Text;
    partsText: Schema.Attribute.Text;
    regularText: Schema.Attribute.Text;
    regularwindowText: Schema.Attribute.Text;
    reliableTitle: Schema.Attribute.String;
    snapsetImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    snapsetpartsText: Schema.Attribute.Text;
    snapsetTitle: Schema.Attribute.String;
  };
}

export interface OnlinebasedOnlineBased extends Struct.ComponentSchema {
  collectionName: 'components_onlinebased_online_baseds';
  info: {
    displayName: 'OnlineBased';
  };
  attributes: {
    onlineBasedBtn: Schema.Attribute.String;
    onlineBasedHeader: Schema.Attribute.String;
    onlineBasedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    onlineBasedText: Schema.Attribute.Text;
  };
}

export interface PressuresealheroPressuresealHero
  extends Struct.ComponentSchema {
  collectionName: 'components_pressuresealhero_pressureseal_heroes';
  info: {
    displayName: 'pressuresealHero';
  };
  attributes: {
    pressuresealDesc: Schema.Attribute.Text;
    pressuresealHeader: Schema.Attribute.String;
    pressuresealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PressuresealwhatisPressuresealWhatIs
  extends Struct.ComponentSchema {
  collectionName: 'components_pressuresealwhatis_pressureseal_what_is';
  info: {
    displayName: 'pressuresealWhatIs';
  };
  attributes: {
    pressuresealImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealImage3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealWhatIsDesc: Schema.Attribute.Text;
    pressuresealWhatIsTitle: Schema.Attribute.String;
    sealedbypressureText: Schema.Attribute.Text;
  };
}

export interface ProductgalleryProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_productgallery_product_galleries';
  info: {
    displayName: 'ProductGallery';
  };
  attributes: {
    productGalleryHeader: Schema.Attribute.String;
    productGalleryImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProductheroProductHero extends Struct.ComponentSchema {
  collectionName: 'components_producthero_product_heroes';
  info: {
    displayName: 'productHero';
  };
  attributes: {
    productHeroHeader: Schema.Attribute.String;
    productHeroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    productHeroText: Schema.Attribute.Text;
  };
}

export interface ProductsfeaturedproductsProductsFeaturedProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_productsfeaturedproducts_products_featured_products';
  info: {
    displayName: 'ProductsFeaturedProducts';
  };
  attributes: {
    featureProductsHeader: Schema.Attribute.String;
    integratedformBtn: Schema.Attribute.String;
    integratedformImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformTitle: Schema.Attribute.String;
    linerlessBtn: Schema.Attribute.String;
    linerlessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlessTitle: Schema.Attribute.String;
    pressuresealBtn: Schema.Attribute.String;
    pressuresealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealTitle: Schema.Attribute.String;
  };
}

export interface PromoproductsPromoProducts extends Struct.ComponentSchema {
  collectionName: 'components_promoproducts_promo_products';
  info: {
    displayName: 'PromoProducts';
  };
  attributes: {
    promoProductsBtn: Schema.Attribute.String;
    promoProductsHeader: Schema.Attribute.String;
    promoProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    promoproductsText: Schema.Attribute.Text;
  };
}

export interface RequestquoteformRequestquoteForm
  extends Struct.ComponentSchema {
  collectionName: 'components_requestquoteform_requestquote_forms';
  info: {
    displayName: 'requestquoteForm';
  };
  attributes: {
    AdditionalDetails: Schema.Attribute.String;
    CompanyName: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    FileUpload: Schema.Attribute.String;
    FullName: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    ProductType: Schema.Attribute.String;
    Quantity: Schema.Attribute.String;
    requestquoteBtn: Schema.Attribute.String;
  };
}

export interface RequestquoteheroRequestquoteHero
  extends Struct.ComponentSchema {
  collectionName: 'components_requestquotehero_requestquote_heroes';
  info: {
    displayName: 'requestquoteHero';
  };
  attributes: {
    requestquoteEmail: Schema.Attribute.String;
    requestquoteHeader: Schema.Attribute.String;
    requestquotePhone: Schema.Attribute.String;
    requestquoteText: Schema.Attribute.String;
  };
}

export interface SecurefoldSecureFold extends Struct.ComponentSchema {
  collectionName: 'components_securefold_secure_folds';
  info: {
    displayName: 'SecureFold';
  };
  attributes: {
    directmail: Schema.Attribute.String;
    idealforText: Schema.Attribute.String;
    payroll: Schema.Attribute.String;
    securefoldBtn: Schema.Attribute.String;
    securefoldImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    securefoldTitle: Schema.Attribute.String;
    statements: Schema.Attribute.String;
    taxforms: Schema.Attribute.String;
    utilitybills: Schema.Attribute.String;
  };
}

export interface ServiceheroServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_servicehero_service_heroes';
  info: {
    displayName: 'serviceHero';
  };
  attributes: {
    serviceHeroBtn: Schema.Attribute.String;
    serviceHeroDesc: Schema.Attribute.Text;
    serviceHeroHeader: Schema.Attribute.String;
    serviceHeroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ServicestypeServicesType extends Struct.ComponentSchema {
  collectionName: 'components_servicestype_services_types';
  info: {
    displayName: 'servicesType';
  };
  attributes: {
    servicePoofingDesc: Schema.Attribute.Text;
    servicePoofingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    servicePoofingTitle: Schema.Attribute.String;
    servicePortalDesc: Schema.Attribute.Text;
    servicePortalImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    servicePortalTitle: Schema.Attribute.String;
    serviceWarehouseDesc: Schema.Attribute.Text;
    serviceWarehouseImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    serviceWarehouseTitle: Schema.Attribute.String;
  };
}

export interface SmartefficientformSmartEfficientForm
  extends Struct.ComponentSchema {
  collectionName: 'components_smartefficientform_smart_efficient_forms';
  info: {
    displayName: 'SmartEfficientForm';
  };
  attributes: {
    commonapplicationsText: Schema.Attribute.String;
    distribution: Schema.Attribute.String;
    ecommerce: Schema.Attribute.String;
    healthcare: Schema.Attribute.String;
    insurance: Schema.Attribute.String;
    logistics: Schema.Attribute.String;
    retail: Schema.Attribute.String;
    smartefficientBtn: Schema.Attribute.String;
    smartefficientformTitle: Schema.Attribute.String;
    smartefficientImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SustainablelabelSustainableLabel
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainablelabel_sustainable_labels';
  info: {
    displayName: 'SustainableLabel';
  };
  attributes: {
    continuousrollText: Schema.Attribute.Text;
    custombrandingText: Schema.Attribute.Text;
    excellentforText: Schema.Attribute.Text;
    keyadvantagesTitle: Schema.Attribute.String;
    nolinerText: Schema.Attribute.Text;
    sustainableBtn: Schema.Attribute.String;
    sustainableImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sustainableTitle: Schema.Attribute.String;
  };
}

export interface UniqueproductsUniqueProducts extends Struct.ComponentSchema {
  collectionName: 'components_uniqueproducts_unique_products';
  info: {
    displayName: 'UniqueProducts';
  };
  attributes: {
    uniqueProductsBtn: Schema.Attribute.String;
    uniqueProductsHeader: Schema.Attribute.String;
    uniqueProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    uniqueProductsText: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'aboutushero.about-us-hero': AboutusheroAboutUsHero;
      'aboutuswhy.about-us-why': AboutuswhyAboutUsWhy;
      'contactusform.contactus-form': ContactusformContactusForm;
      'contactushero.contactus-hero': ContactusheroContactusHero;
      'featuredproducts.featured-products': FeaturedproductsFeaturedProducts;
      'featuredpromoproducts.featured-promo-products': FeaturedpromoproductsFeaturedPromoProducts;
      'featuredservices.featured-services': FeaturedservicesFeaturedServices;
      'highquality.high-quality': HighqualityHighQuality;
      'homehero.home-hero': HomeheroHomeHero;
      'integratedformlabelhero.integratedformlabel-hero': IntegratedformlabelheroIntegratedformlabelHero;
      'integratedformlabelwhatis.integratedformlabel-what-is': IntegratedformlabelwhatisIntegratedformlabelWhatIs;
      'linerlesslabelhero.linerlesslabel-hero': LinerlesslabelheroLinerlesslabelHero;
      'linerlesslabelwhatis.linerlesslabel-what-is': LinerlesslabelwhatisLinerlesslabelWhatIs;
      'moreproducts.more-products': MoreproductsMoreProducts;
      'onlinebased.online-based': OnlinebasedOnlineBased;
      'pressuresealhero.pressureseal-hero': PressuresealheroPressuresealHero;
      'pressuresealwhatis.pressureseal-what-is': PressuresealwhatisPressuresealWhatIs;
      'productgallery.product-gallery': ProductgalleryProductGallery;
      'producthero.product-hero': ProductheroProductHero;
      'productsfeaturedproducts.products-featured-products': ProductsfeaturedproductsProductsFeaturedProducts;
      'promoproducts.promo-products': PromoproductsPromoProducts;
      'requestquoteform.requestquote-form': RequestquoteformRequestquoteForm;
      'requestquotehero.requestquote-hero': RequestquoteheroRequestquoteHero;
      'securefold.secure-fold': SecurefoldSecureFold;
      'servicehero.service-hero': ServiceheroServiceHero;
      'servicestype.services-type': ServicestypeServicesType;
      'smartefficientform.smart-efficient-form': SmartefficientformSmartEfficientForm;
      'sustainablelabel.sustainable-label': SustainablelabelSustainableLabel;
      'uniqueproducts.unique-products': UniqueproductsUniqueProducts;
    }
  }
}
