import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutBtn: Schema.Attribute.String;
    aboutHeader: Schema.Attribute.String;
    aboutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    aboutText: Schema.Attribute.Text;
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
    aboutUsHeroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutuswhyAboutUsWhy extends Struct.ComponentSchema {
  collectionName: 'components_aboutuswhy_about_us_whies';
  info: {
    displayName: 'aboutUsWhy';
  };
  attributes: {
    aboutUsWhatDesc: Schema.Attribute.Text;
    aboutUsWhatTitle: Schema.Attribute.String;
    aboutUsWhyBtn: Schema.Attribute.String;
    aboutUsWhyDesc: Schema.Attribute.Text;
    aboutUsWhyImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    aboutUsWhyTitle: Schema.Attribute.String;
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
    heroBtn: Schema.Attribute.String;
    heroHeader: Schema.Attribute.String;
    heroText: Schema.Attribute.Text;
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

export interface IntegratedformlabelimagegalleryIntegratedformlabelImageGallery
  extends Struct.ComponentSchema {
  collectionName: 'components_integratedformlabelimagegallery_integratedformlabel_image_galleries';
  info: {
    displayName: 'integratedformlabelImageGallery';
  };
  attributes: {
    integratedformlabelBtn: Schema.Attribute.String;
    integratedformlabelImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
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
    integratedformBtn: Schema.Attribute.String;
    integratedformlabelWhatIsDesc: Schema.Attribute.Text;
    integratedformlabelWhatIsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformlabelWhatIsTitle: Schema.Attribute.String;
  };
}

export interface LinerlessimagegalleryLinerlessImageGallery
  extends Struct.ComponentSchema {
  collectionName: 'components_linerlessimagegallery_linerless_image_galleries';
  info: {
    displayName: 'linerlessImageGallery';
  };
  attributes: {
    linerlessBtn: Schema.Attribute.String;
    linerlesslabelImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LinerlesslabelheroLinerlesslabelHero
  extends Struct.ComponentSchema {
  collectionName: 'components_linerlesslabelhero_linerlesslabel_heroes';
  info: {
    displayName: 'linerlesslabelHero';
  };
  attributes: {
    linerlesslabelDesc: Schema.Attribute.Text;
    linerlesslabelHeader: Schema.Attribute.String;
    linerlesslabelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LinerlesslabelwhatisLinerlesslabelWhatIs
  extends Struct.ComponentSchema {
  collectionName: 'components_linerlesslabelwhatis_linerlesslabel_what_is';
  info: {
    displayName: 'linerlesslabelWhatIs';
  };
  attributes: {
    linerlesslabelBtn: Schema.Attribute.String;
    linerlesslabelWhatIsDesc: Schema.Attribute.Text;
    linerlesslabelWhatIsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlesslabelWhatIsTitle: Schema.Attribute.String;
  };
}

export interface MoreproductsMoreProducts extends Struct.ComponentSchema {
  collectionName: 'components_moreproducts_more_products';
  info: {
    displayName: 'MoreProducts';
  };
  attributes: {
    chequesImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    chequesTitle: Schema.Attribute.String;
    envelopesImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    envelopesTitle: Schema.Attribute.String;
    formsImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    formsTitle: Schema.Attribute.String;
    labelsmarketingImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    labelsmarketingTitle: Schema.Attribute.String;
    moreproductsHeader: Schema.Attribute.String;
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

export interface PressuresealimagegalleryPressuresealImageGallery
  extends Struct.ComponentSchema {
  collectionName: 'components_pressuresealimagegallery_pressureseal_image_galleries';
  info: {
    displayName: 'pressuresealImageGallery';
  };
  attributes: {
    pressuresealBtn: Schema.Attribute.String;
    pressuresealImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
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
    pressuresealBtn: Schema.Attribute.String;
    pressuresealWhatIsDesc: Schema.Attribute.Text;
    pressuresealWhatIsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealWhatIsTitle: Schema.Attribute.String;
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
      'featuredproducts.featured-products': FeaturedproductsFeaturedProducts;
      'featuredpromoproducts.featured-promo-products': FeaturedpromoproductsFeaturedPromoProducts;
      'featuredservices.featured-services': FeaturedservicesFeaturedServices;
      'highquality.high-quality': HighqualityHighQuality;
      'homehero.home-hero': HomeheroHomeHero;
      'integratedformlabelhero.integratedformlabel-hero': IntegratedformlabelheroIntegratedformlabelHero;
      'integratedformlabelimagegallery.integratedformlabel-image-gallery': IntegratedformlabelimagegalleryIntegratedformlabelImageGallery;
      'integratedformlabelwhatis.integratedformlabel-what-is': IntegratedformlabelwhatisIntegratedformlabelWhatIs;
      'linerlessimagegallery.linerless-image-gallery': LinerlessimagegalleryLinerlessImageGallery;
      'linerlesslabelhero.linerlesslabel-hero': LinerlesslabelheroLinerlesslabelHero;
      'linerlesslabelwhatis.linerlesslabel-what-is': LinerlesslabelwhatisLinerlesslabelWhatIs;
      'moreproducts.more-products': MoreproductsMoreProducts;
      'onlinebased.online-based': OnlinebasedOnlineBased;
      'pressuresealhero.pressureseal-hero': PressuresealheroPressuresealHero;
      'pressuresealimagegallery.pressureseal-image-gallery': PressuresealimagegalleryPressuresealImageGallery;
      'pressuresealwhatis.pressureseal-what-is': PressuresealwhatisPressuresealWhatIs;
      'productgallery.product-gallery': ProductgalleryProductGallery;
      'producthero.product-hero': ProductheroProductHero;
      'productsfeaturedproducts.products-featured-products': ProductsfeaturedproductsProductsFeaturedProducts;
      'promoproducts.promo-products': PromoproductsPromoProducts;
      'servicehero.service-hero': ServiceheroServiceHero;
      'servicestype.services-type': ServicestypeServicesType;
      'uniqueproducts.unique-products': UniqueproductsUniqueProducts;
    }
  }
}
