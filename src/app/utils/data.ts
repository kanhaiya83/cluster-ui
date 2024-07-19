export type InputParam = {
    type: "string" | "integer" | "number";
    id: string;
    title: string;
    required?: boolean;
    min?: number;
    max?: number;
}

export type DataItem = {
    title: string;
    owner: string;
    private: boolean;
    total_runs: number;
    cold_boot_status: "warm" | "cold";
    github_link: string;
    license_link: string;
    inputParams: InputParam[];
}


export const data: DataItem[] = [
    {
        "title": "model-alpha",
        "owner": "meta",
        "private": false,
        "total_runs": 123456,
        "cold_boot_status": "warm",

        "github_link": "https://github.com/meta/model-alpha",
        "license_link": "https://meta.com/model-alpha/license",
        "inputParams": [
            {
                "type": "string",
                "id": "prompt",
                "title": "Your Prompt",
                "required": true,
                "min": 0
            },
            {
                "type": "string",
                "id": "system_prompt",
                "title": "System Prompt"
            },
            {
                "type": "integer",
                "id": "max_token",
                "title": "Max Tokens",
                "min": 10,
                "max": 1000
            },
            {
                "type": "number",
                "id": "temperature",
                "title": "Temperature",
                "min": 0,
                "max": 1
            }
        ]
    },
    {
        "title": "model-beta",
        "owner": "meta",
        "private": false,
        "total_runs": 654321,
        "cold_boot_status": "cold",
        "github_link": "https://github.com/meta/model-beta",
        "license_link": "https://meta.com/model-beta/license",
        "inputParams": [
            {
                "type": "string",
                "id": "prompt",
                "title": "Your Prompt",
                "required": true,
                "min": 0
            },
            {
                "type": "string",
                "id": "context",
                "title": "Context"
            },
            {
                "type": "integer",
                "id": "max_length",
                "title": "Max Length",
                "max": 1000,
                "min": 200
            },
            {
                "type": "number",
                "id": "top_p",
                "title": "Top P",
                "min": 0,
                "max": 1
            }
        ]
    },
    {
        "title": "model-gamma",
        "owner": "meta",
        "private": false,
        "total_runs": 789012,
        "cold_boot_status": "warm",
        "github_link": "https://github.com/meta/model-gamma",
        "license_link": "https://meta.com/model-gamma/license",
        "inputParams": [
            {
                "type": "string",
                "id": "query",
                "title": "Query",
                "required": true,
                "min": 0
            },
            {
                "type": "string",
                "id": "background_info",
                "title": "Background Info"
            },
            {
                "type": "integer",
                "id": "max_tokens",
                "title": "Max Tokens",
                "min": 10,
                "max": 789
            },
            {
                "type": "number",
                "id": "top_k",
                "title": "Top K",
                "min": 0,
                "max": 100
            }
        ]
    },
    {
        "title": "model-delta",
        "owner": "meta",
        "private": false,
        "total_runs": 345678,
        "cold_boot_status": "cold",
        "github_link": "https://github.com/meta/model-delta",
        "license_link": "https://meta.com/model-delta/license",
        "inputParams": [
            {
                "type": "string",
                "id": "input_text",
                "title": "Input Text",
                "required": true,
                "min": 0
            },
            {
                "type": "string",
                "id": "config",
                "title": "Configuration"
            },
            {
                "type": "integer",
                "id": "max_response_length",
                "title": "Max Response Length",
                "min": 102,
                "max": 500
            },
            {
                "type": "number",
                "id": "frequency_penalty",
                "title": "Frequency Penalty",
                "min": 0,
                "max": 2
            }
        ]
    }
]

export const responseData = [
    {
        "model": "model-alpha",
        "completed_at": "2024-06-02T21:59:40.667881Z",
        "created_at": "2024-06-02T21:57:22.192000Z",
        "data_removed": false,
        "error": null,
        "id": "gw8thp06j1rgp0cfvbtsvrq9vc",
        "input": {
            "loop": false,
            "prompt": "",
            "image_1": "https://replicate.delivery/pbxt/L1pQdyf4fPVRzU5WxhhHAdH2Eo05X3zhirvNzwAKJ80lA7Qh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-0.webp",
            "image_2": "https://replicate.delivery/pbxt/L1pQeBF582rKH3FFAYJCxdFUurBZ1axNFVwKxEd1wIALydhh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-1.webp",
            "image_3": "https://replicate.delivery/pbxt/L1pQdTPwSZxnfDkPkM3eArBmHWd5xttTnSkKBhszXJ88pIff/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-3.webp",
            "max_width": 512,
            "max_height": 512,
            "interpolate": false,
            "negative_prompt": "",
            "color_correction": true
        },
        "logs": "Random seed set to: 1500914532\nChecking inputs\n✅ /tmp/inputs/input_1.png\n✅ /tmp/inputs/input_2.png\n✅ /tmp/inputs/input_3.png\n====================================\nChecking weights\n✅ tooncrafter_512_interp-fp16.safetensors\n✅ stable-diffusion-2-1-clip-fp16.safetensors\n✅ CLIP-ViT-H-fp16.safetensors\n====================================\nRunning workflow\ngot prompt\nExecuting node 1, title: Load Image, class type: LoadImage\nDownloading model to: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nExecuting node 52, title: DownloadAndLoadDynamiCrafterModel, class type: DownloadAndLoadDynamiCrafterModel\nFetching 1 files:   0%|          | 0/1 [00:00<?, ?it/s]/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/huggingface_hub/file_download.py:1194: UserWarning: `local_dir_use_symlinks` parameter is deprecated and will be ignored. The process to download files to a local folder has been updated and do not rely on symlinks anymore. You only need to pass a destination folder as`local_dir`.\nFor more details, check out https://huggingface.co/docs/huggingface_hub/main/en/guides/download#download-files-to-local-folder.\nwarnings.warn(\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nLoading model from: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nLatentVisualDiffusion: Running in v-prediction mode\nAE working on z of shape (1, 4, 32, 32) = 4096 dimensions.\nWorking with z of shape (1, 4, 32, 32) = 4096 dimensions.\nvanilla\nmaking attention of type 'vanilla' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\n>>> model checkpoint loaded.\nModel using dtype: torch.float16\nExecuting node 61, title: DownloadAndLoadCLIPVisionModel, class type: DownloadAndLoadCLIPVisionModel\nLoading model from: /src/ComfyUI/models/clip_vision/CLIP-ViT-H-fp16.safetensors\nExecuting node 59, title: DownloadAndLoadCLIPModel, class type: DownloadAndLoadCLIPModel\nclip missing: ['text_model.encoder.layers.23.layer_norm1.weight', 'text_model.encoder.layers.23.layer_norm1.bias', 'text_model.encoder.layers.23.self_attn.q_proj.weight', 'text_model.encoder.layers.23.self_attn.q_proj.bias', 'text_model.encoder.layers.23.self_attn.k_proj.weight', 'text_model.encoder.layers.23.self_attn.k_proj.bias', 'text_model.encoder.layers.23.self_attn.v_proj.weight', 'text_model.encoder.layers.23.self_attn.v_proj.bias', 'text_model.encoder.layers.23.self_attn.out_proj.weight', 'text_model.encoder.layers.23.self_attn.out_proj.bias', 'text_model.encoder.layers.23.layer_norm2.weight', 'text_model.encoder.layers.23.layer_norm2.bias', 'text_model.encoder.layers.23.mlp.fc1.weight', 'text_model.encoder.layers.23.mlp.fc1.bias', 'text_model.encoder.layers.23.mlp.fc2.weight', 'text_model.encoder.layers.23.mlp.fc2.bias', 'text_projection.weight']\nLoading model from: /src/ComfyUI/models/clip/stable-diffusion-2-1-clip-fp16.safetensors\nRequested to load SD2ClipModel\nLoading 1 new model\nExecuting node 49, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 50, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 70, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 2, title: Load Image, class type: LoadImage\nExecuting node 303, title: Load Image, class type: LoadImage\nExecuting node 28, title: Image Batch Multi, class type: ImageBatchMulti\nExecuting node 6, title: Get Image Size & Count, class type: GetImageSizeAndCount\nExecuting node 65, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 57, title: ToonCrafterInterpolation, class type: ToonCrafterInterpolation\nVAE using dtype: torch.bfloat16\nRequested to load CLIPVisionModelProjection\nLoading 1 new model\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:13,  1.37it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.51it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.56it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:10,  1.59it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.60it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.61it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:08,  1.62it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:05<00:07,  1.62it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.62it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.62it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:08<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.61it/s]\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:11,  1.63it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.63it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.63it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:09,  1.63it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.63it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.63it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.63it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.63it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nExecuting node 58, title: ToonCrafterDecode, class type: ToonCrafterDecode\nVAE using dtype: torch.bfloat16\nUsing xformers\n/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/torch/nn/modules/conv.py:605: UserWarning: Plan failed with a cudnnException: CUDNN_BACKEND_EXECUTION_PLAN_DESCRIPTOR: cudnnFinalize Descriptor Failed cudnn_status: CUDNN_STATUS_NOT_SUPPORTED (Triggered internally at ../aten/src/ATen/native/cudnn/Conv_v8.cpp:919.)\nreturn F.conv3d(\nUsing xformers\nExecuting node 67, title: Color Match, class type: ColorMatch\nExecuting node 29, title: Video Combine 🎥🅥🅗🅢, class type: VHS_VideoCombine\nPrompt executed in 59.29 seconds\noutputs:  {'6': {'text': ['3x512x512']}, '29': {'gifs': [{'filename': 'ToonCrafter_00001.mp4', 'subfolder': '', 'type': 'output', 'format': 'video/h264-mp4'}]}}\n====================================\nToonCrafter_00001.png\nToonCrafter_00001.mp4",
        "metrics": {
            "predict_time": 61.900853,
            "total_time": 138.475881
        },
        "output": [
            "https://replicate.delivery/pbxt/aDDntBsXmmL6DZMIRURYbxjeer1PZxmT9TIl0MOfqcrYqT1lA/ToonCrafter_00001.mp4"
        ],
        "started_at": "2024-06-02T21:58:38.767028Z",
        "status": "succeeded",
        "urls": {
            "get": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc",
            "cancel": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc/cancel"
        },
        "version": "51bf654d60d307ab45c4ffe09546a3c9606f8f33861ab28f5bb0e43ad3fa40ed"
    },
    {
        "model": "model-beta",
        "completed_at": "2024-06-02T21:59:40.667881Z",
        "created_at": "2024-06-02T21:57:22.192000Z",
        "data_removed": false,
        "error": null,
        "id": "gw8thp06j1rgp0cfvbtsvrq9vc",
        "input": {
            "loop": false,
            "prompt": "",
            "image_1": "https://replicate.delivery/pbxt/L1pQdyf4fPVRzU5WxhhHAdH2Eo05X3zhirvNzwAKJ80lA7Qh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-0.webp",
            "image_2": "https://replicate.delivery/pbxt/L1pQeBF582rKH3FFAYJCxdFUurBZ1axNFVwKxEd1wIALydhh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-1.webp",
            "image_3": "https://replicate.delivery/pbxt/L1pQdTPwSZxnfDkPkM3eArBmHWd5xttTnSkKBhszXJ88pIff/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-3.webp",
            "max_width": 512,
            "max_height": 512,
            "interpolate": false,
            "negative_prompt": "",
            "color_correction": true
        },
        "logs": "Random seed set to: 1500914532\nChecking inputs\n✅ /tmp/inputs/input_1.png\n✅ /tmp/inputs/input_2.png\n✅ /tmp/inputs/input_3.png\n====================================\nChecking weights\n✅ tooncrafter_512_interp-fp16.safetensors\n✅ stable-diffusion-2-1-clip-fp16.safetensors\n✅ CLIP-ViT-H-fp16.safetensors\n====================================\nRunning workflow\ngot prompt\nExecuting node 1, title: Load Image, class type: LoadImage\nDownloading model to: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nExecuting node 52, title: DownloadAndLoadDynamiCrafterModel, class type: DownloadAndLoadDynamiCrafterModel\nFetching 1 files:   0%|          | 0/1 [00:00<?, ?it/s]/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/huggingface_hub/file_download.py:1194: UserWarning: `local_dir_use_symlinks` parameter is deprecated and will be ignored. The process to download files to a local folder has been updated and do not rely on symlinks anymore. You only need to pass a destination folder as`local_dir`.\nFor more details, check out https://huggingface.co/docs/huggingface_hub/main/en/guides/download#download-files-to-local-folder.\nwarnings.warn(\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nLoading model from: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nLatentVisualDiffusion: Running in v-prediction mode\nAE working on z of shape (1, 4, 32, 32) = 4096 dimensions.\nWorking with z of shape (1, 4, 32, 32) = 4096 dimensions.\nvanilla\nmaking attention of type 'vanilla' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\n>>> model checkpoint loaded.\nModel using dtype: torch.float16\nExecuting node 61, title: DownloadAndLoadCLIPVisionModel, class type: DownloadAndLoadCLIPVisionModel\nLoading model from: /src/ComfyUI/models/clip_vision/CLIP-ViT-H-fp16.safetensors\nExecuting node 59, title: DownloadAndLoadCLIPModel, class type: DownloadAndLoadCLIPModel\nclip missing: ['text_model.encoder.layers.23.layer_norm1.weight', 'text_model.encoder.layers.23.layer_norm1.bias', 'text_model.encoder.layers.23.self_attn.q_proj.weight', 'text_model.encoder.layers.23.self_attn.q_proj.bias', 'text_model.encoder.layers.23.self_attn.k_proj.weight', 'text_model.encoder.layers.23.self_attn.k_proj.bias', 'text_model.encoder.layers.23.self_attn.v_proj.weight', 'text_model.encoder.layers.23.self_attn.v_proj.bias', 'text_model.encoder.layers.23.self_attn.out_proj.weight', 'text_model.encoder.layers.23.self_attn.out_proj.bias', 'text_model.encoder.layers.23.layer_norm2.weight', 'text_model.encoder.layers.23.layer_norm2.bias', 'text_model.encoder.layers.23.mlp.fc1.weight', 'text_model.encoder.layers.23.mlp.fc1.bias', 'text_model.encoder.layers.23.mlp.fc2.weight', 'text_model.encoder.layers.23.mlp.fc2.bias', 'text_projection.weight']\nLoading model from: /src/ComfyUI/models/clip/stable-diffusion-2-1-clip-fp16.safetensors\nRequested to load SD2ClipModel\nLoading 1 new model\nExecuting node 49, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 50, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 70, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 2, title: Load Image, class type: LoadImage\nExecuting node 303, title: Load Image, class type: LoadImage\nExecuting node 28, title: Image Batch Multi, class type: ImageBatchMulti\nExecuting node 6, title: Get Image Size & Count, class type: GetImageSizeAndCount\nExecuting node 65, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 57, title: ToonCrafterInterpolation, class type: ToonCrafterInterpolation\nVAE using dtype: torch.bfloat16\nRequested to load CLIPVisionModelProjection\nLoading 1 new model\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:13,  1.37it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.51it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.56it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:10,  1.59it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.60it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.61it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:08,  1.62it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:05<00:07,  1.62it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.62it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.62it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:08<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.61it/s]\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:11,  1.63it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.63it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.63it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:09,  1.63it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.63it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.63it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.63it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.63it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nExecuting node 58, title: ToonCrafterDecode, class type: ToonCrafterDecode\nVAE using dtype: torch.bfloat16\nUsing xformers\n/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/torch/nn/modules/conv.py:605: UserWarning: Plan failed with a cudnnException: CUDNN_BACKEND_EXECUTION_PLAN_DESCRIPTOR: cudnnFinalize Descriptor Failed cudnn_status: CUDNN_STATUS_NOT_SUPPORTED (Triggered internally at ../aten/src/ATen/native/cudnn/Conv_v8.cpp:919.)\nreturn F.conv3d(\nUsing xformers\nExecuting node 67, title: Color Match, class type: ColorMatch\nExecuting node 29, title: Video Combine 🎥🅥🅗🅢, class type: VHS_VideoCombine\nPrompt executed in 59.29 seconds\noutputs:  {'6': {'text': ['3x512x512']}, '29': {'gifs': [{'filename': 'ToonCrafter_00001.mp4', 'subfolder': '', 'type': 'output', 'format': 'video/h264-mp4'}]}}\n====================================\nToonCrafter_00001.png\nToonCrafter_00001.mp4",
        "metrics": {
            "predict_time": 61.900853,
            "total_time": 138.475881
        },
        "output": [
            "https://replicate.delivery/pbxt/aDDntBsXmmL6DZMIRURYbxjeer1PZxmT9TIl0MOfqcrYqT1lA/ToonCrafter_00001.mp4"
        ],
        "started_at": "2024-06-02T21:58:38.767028Z",
        "status": "succeeded",
        "urls": {
            "get": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc",
            "cancel": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc/cancel"
        },
        "version": "51bf654d60d307ab45c4ffe09546a3c9606f8f33861ab28f5bb0e43ad3fa40ed"
    },
    {
        "model": "model-gamma",
        "completed_at": "2024-06-02T21:59:40.667881Z",
        "created_at": "2024-06-02T21:57:22.192000Z",
        "data_removed": false,
        "error": null,
        "id": "gw8thp06j1rgp0cfvbtsvrq9vc",
        "input": {
            "loop": false,
            "prompt": "",
            "image_1": "https://replicate.delivery/pbxt/L1pQdyf4fPVRzU5WxhhHAdH2Eo05X3zhirvNzwAKJ80lA7Qh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-0.webp",
            "image_2": "https://replicate.delivery/pbxt/L1pQeBF582rKH3FFAYJCxdFUurBZ1axNFVwKxEd1wIALydhh/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-1.webp",
            "image_3": "https://replicate.delivery/pbxt/L1pQdTPwSZxnfDkPkM3eArBmHWd5xttTnSkKBhszXJ88pIff/replicate-prediction-5cvynz9d91rgg0cfsvqschdpww-3.webp",
            "max_width": 512,
            "max_height": 512,
            "interpolate": false,
            "negative_prompt": "",
            "color_correction": true
        },
        "logs": "Random seed set to: 1500914532\nChecking inputs\n✅ /tmp/inputs/input_1.png\n✅ /tmp/inputs/input_2.png\n✅ /tmp/inputs/input_3.png\n====================================\nChecking weights\n✅ tooncrafter_512_interp-fp16.safetensors\n✅ stable-diffusion-2-1-clip-fp16.safetensors\n✅ CLIP-ViT-H-fp16.safetensors\n====================================\nRunning workflow\ngot prompt\nExecuting node 1, title: Load Image, class type: LoadImage\nDownloading model to: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nExecuting node 52, title: DownloadAndLoadDynamiCrafterModel, class type: DownloadAndLoadDynamiCrafterModel\nFetching 1 files:   0%|          | 0/1 [00:00<?, ?it/s]/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/huggingface_hub/file_download.py:1194: UserWarning: `local_dir_use_symlinks` parameter is deprecated and will be ignored. The process to download files to a local folder has been updated and do not rely on symlinks anymore. You only need to pass a destination folder as`local_dir`.\nFor more details, check out https://huggingface.co/docs/huggingface_hub/main/en/guides/download#download-files-to-local-folder.\nwarnings.warn(\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nFetching 1 files: 100%|██████████| 1/1 [00:13<00:00, 13.65s/it]\nLoading model from: /src/ComfyUI/models/checkpoints/dynamicrafter/tooncrafter_512_interp-fp16.safetensors\nLatentVisualDiffusion: Running in v-prediction mode\nAE working on z of shape (1, 4, 32, 32) = 4096 dimensions.\nWorking with z of shape (1, 4, 32, 32) = 4096 dimensions.\nvanilla\nmaking attention of type 'vanilla' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\nmemory-efficient-cross-attn-fusion\nmaking attention of type 'memory-efficient-cross-attn-fusion' with 512 in_channels\n>>> model checkpoint loaded.\nModel using dtype: torch.float16\nExecuting node 61, title: DownloadAndLoadCLIPVisionModel, class type: DownloadAndLoadCLIPVisionModel\nLoading model from: /src/ComfyUI/models/clip_vision/CLIP-ViT-H-fp16.safetensors\nExecuting node 59, title: DownloadAndLoadCLIPModel, class type: DownloadAndLoadCLIPModel\nclip missing: ['text_model.encoder.layers.23.layer_norm1.weight', 'text_model.encoder.layers.23.layer_norm1.bias', 'text_model.encoder.layers.23.self_attn.q_proj.weight', 'text_model.encoder.layers.23.self_attn.q_proj.bias', 'text_model.encoder.layers.23.self_attn.k_proj.weight', 'text_model.encoder.layers.23.self_attn.k_proj.bias', 'text_model.encoder.layers.23.self_attn.v_proj.weight', 'text_model.encoder.layers.23.self_attn.v_proj.bias', 'text_model.encoder.layers.23.self_attn.out_proj.weight', 'text_model.encoder.layers.23.self_attn.out_proj.bias', 'text_model.encoder.layers.23.layer_norm2.weight', 'text_model.encoder.layers.23.layer_norm2.bias', 'text_model.encoder.layers.23.mlp.fc1.weight', 'text_model.encoder.layers.23.mlp.fc1.bias', 'text_model.encoder.layers.23.mlp.fc2.weight', 'text_model.encoder.layers.23.mlp.fc2.bias', 'text_projection.weight']\nLoading model from: /src/ComfyUI/models/clip/stable-diffusion-2-1-clip-fp16.safetensors\nRequested to load SD2ClipModel\nLoading 1 new model\nExecuting node 49, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 50, title: CLIP Text Encode (Prompt), class type: CLIPTextEncode\nExecuting node 70, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 2, title: Load Image, class type: LoadImage\nExecuting node 303, title: Load Image, class type: LoadImage\nExecuting node 28, title: Image Batch Multi, class type: ImageBatchMulti\nExecuting node 6, title: Get Image Size & Count, class type: GetImageSizeAndCount\nExecuting node 65, title: 🔧 Image Resize, class type: ImageResize+\nExecuting node 57, title: ToonCrafterInterpolation, class type: ToonCrafterInterpolation\nVAE using dtype: torch.bfloat16\nRequested to load CLIPVisionModelProjection\nLoading 1 new model\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:13,  1.37it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.51it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.56it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:10,  1.59it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.60it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.61it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:08,  1.62it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:05<00:07,  1.62it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.62it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.62it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:08<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.61it/s]\nDDIM Sampler:   0%|          | 0/20 [00:00<?, ?it/s]\nDDIM Sampler:   5%|▌         | 1/20 [00:00<00:11,  1.63it/s]\nDDIM Sampler:  10%|█         | 2/20 [00:01<00:11,  1.63it/s]\nDDIM Sampler:  15%|█▌        | 3/20 [00:01<00:10,  1.63it/s]\nDDIM Sampler:  20%|██        | 4/20 [00:02<00:09,  1.63it/s]\nDDIM Sampler:  25%|██▌       | 5/20 [00:03<00:09,  1.63it/s]\nDDIM Sampler:  30%|███       | 6/20 [00:03<00:08,  1.63it/s]\nDDIM Sampler:  35%|███▌      | 7/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  40%|████      | 8/20 [00:04<00:07,  1.63it/s]\nDDIM Sampler:  45%|████▌     | 9/20 [00:05<00:06,  1.63it/s]\nDDIM Sampler:  50%|█████     | 10/20 [00:06<00:06,  1.63it/s]\nDDIM Sampler:  55%|█████▌    | 11/20 [00:06<00:05,  1.63it/s]\nDDIM Sampler:  60%|██████    | 12/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  65%|██████▌   | 13/20 [00:07<00:04,  1.63it/s]\nDDIM Sampler:  70%|███████   | 14/20 [00:08<00:03,  1.63it/s]\nDDIM Sampler:  75%|███████▌  | 15/20 [00:09<00:03,  1.63it/s]\nDDIM Sampler:  80%|████████  | 16/20 [00:09<00:02,  1.63it/s]\nDDIM Sampler:  85%|████████▌ | 17/20 [00:10<00:01,  1.63it/s]\nDDIM Sampler:  90%|█████████ | 18/20 [00:11<00:01,  1.63it/s]\nDDIM Sampler:  95%|█████████▌| 19/20 [00:11<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nDDIM Sampler: 100%|██████████| 20/20 [00:12<00:00,  1.63it/s]\nExecuting node 58, title: ToonCrafterDecode, class type: ToonCrafterDecode\nVAE using dtype: torch.bfloat16\nUsing xformers\n/root/.pyenv/versions/3.10.6/lib/python3.10/site-packages/torch/nn/modules/conv.py:605: UserWarning: Plan failed with a cudnnException: CUDNN_BACKEND_EXECUTION_PLAN_DESCRIPTOR: cudnnFinalize Descriptor Failed cudnn_status: CUDNN_STATUS_NOT_SUPPORTED (Triggered internally at ../aten/src/ATen/native/cudnn/Conv_v8.cpp:919.)\nreturn F.conv3d(\nUsing xformers\nExecuting node 67, title: Color Match, class type: ColorMatch\nExecuting node 29, title: Video Combine 🎥🅥🅗🅢, class type: VHS_VideoCombine\nPrompt executed in 59.29 seconds\noutputs:  {'6': {'text': ['3x512x512']}, '29': {'gifs': [{'filename': 'ToonCrafter_00001.mp4', 'subfolder': '', 'type': 'output', 'format': 'video/h264-mp4'}]}}\n====================================\nToonCrafter_00001.png\nToonCrafter_00001.mp4",
        "metrics": {
            "predict_time": 61.900853,
            "total_time": 138.475881
        },
        "output": [
            "https://replicate.delivery/pbxt/aDDntBsXmmL6DZMIRURYbxjeer1PZxmT9TIl0MOfqcrYqT1lA/ToonCrafter_00001.mp4"
        ],
        "started_at": "2024-06-02T21:58:38.767028Z",
        "status": "succeeded",
        "urls": {
            "get": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc",
            "cancel": "https://api.replicate.com/v1/predictions/gw8thp06j1rgp0cfvbtsvrq9vc/cancel"
        },
        "version": "51bf654d60d307ab45c4ffe09546a3c9606f8f33861ab28f5bb0e43ad3fa40ed"
    },
    {
        "model": "model-delta",
        "completed_at": "2023-04-25T22:18:59.625638Z",
        "created_at": "2023-04-25T22:11:26.774980Z",
        "data_removed": false,
        "error": null,
        "id": "ngk3yp5omvdsvkcdoljxs2m4ra",
        "input": {
            "prompt": "Hello, my name is Suno. And, uh — and I like pizza. [laughs] But I also have other interests such as playing tic tac toe."
        },
        "logs": "0%|          | 0/100 [00:00<?, ?it/s]\n  1%|          | 1/100 [00:00<00:27,  3.65it/s]\n  3%|▎         | 3/100 [00:00<00:13,  7.12it/s]\n  5%|▌         | 5/100 [00:00<00:10,  8.90it/s]\n  7%|▋         | 7/100 [00:00<00:09,  9.98it/s]\n  9%|▉         | 9/100 [00:00<00:08, 10.54it/s]\n 11%|█         | 11/100 [00:01<00:08, 11.09it/s]\n 13%|█▎        | 13/100 [00:01<00:07, 11.16it/s]\n 15%|█▌        | 15/100 [00:01<00:07, 11.32it/s]\n 17%|█▋        | 17/100 [00:01<00:07, 11.66it/s]\n 19%|█▉        | 19/100 [00:01<00:06, 11.69it/s]\n 21%|██        | 21/100 [00:01<00:06, 12.05it/s]\n 23%|██▎       | 23/100 [00:02<00:06, 12.17it/s]\n 25%|██▌       | 25/100 [00:02<00:06, 11.89it/s]\n 27%|██▋       | 27/100 [00:02<00:06, 11.64it/s]\n 29%|██▉       | 29/100 [00:02<00:06, 11.51it/s]\n 31%|███       | 31/100 [00:02<00:05, 11.61it/s]\n 33%|███▎      | 33/100 [00:02<00:05, 11.88it/s]\n 35%|███▌      | 35/100 [00:03<00:05, 11.82it/s]\n 37%|███▋      | 37/100 [00:03<00:05, 11.75it/s]\n 39%|███▉      | 39/100 [00:03<00:05, 11.63it/s]\n 41%|████      | 41/100 [00:03<00:05, 11.64it/s]\n 43%|████▎     | 43/100 [00:03<00:04, 11.79it/s]\n 45%|████▌     | 45/100 [00:04<00:04, 11.94it/s]\n 47%|████▋     | 47/100 [00:04<00:04, 11.83it/s]\n 49%|████▉     | 49/100 [00:04<00:04, 11.89it/s]\n 51%|█████     | 51/100 [00:04<00:04, 11.70it/s]\n 53%|█████▎    | 53/100 [00:04<00:04, 11.56it/s]\n 55%|█████▌    | 55/100 [00:04<00:03, 11.64it/s]\n 57%|█████▋    | 57/100 [00:05<00:03, 11.63it/s]\n 59%|█████▉    | 59/100 [00:05<00:03, 11.38it/s]\n 61%|██████    | 61/100 [00:05<00:03, 11.38it/s]\n 63%|██████▎   | 63/100 [00:05<00:03, 11.07it/s]\n 65%|██████▌   | 65/100 [00:05<00:03, 11.19it/s]\n 67%|██████▋   | 67/100 [00:05<00:02, 11.28it/s]\n 69%|██████▉   | 69/100 [00:06<00:02, 11.08it/s]\n 71%|███████   | 71/100 [00:06<00:02, 11.11it/s]\n 73%|███████▎  | 73/100 [00:06<00:02, 10.91it/s]\n 75%|███████▌  | 75/100 [00:06<00:02, 10.78it/s]\n 77%|███████▋  | 77/100 [00:06<00:02, 10.83it/s]\n 79%|███████▉  | 79/100 [00:07<00:01, 10.86it/s]\n 81%|████████  | 81/100 [00:07<00:01, 10.64it/s]\n 83%|████████▎ | 83/100 [00:07<00:01, 10.67it/s]\n 85%|████████▌ | 85/100 [00:07<00:01, 10.57it/s]\n 87%|████████▋ | 87/100 [00:07<00:01, 10.34it/s]\n 89%|████████▉ | 89/100 [00:08<00:01, 10.39it/s]\n 91%|█████████ | 91/100 [00:08<00:00, 10.10it/s]\n 93%|█████████▎| 93/100 [00:08<00:00, 10.06it/s]\n100%|██████████| 100/100 [00:08<00:00, 20.32it/s]\n100%|██████████| 100/100 [00:08<00:00, 11.69it/s]\n  0%|          | 0/36 [00:00<?, ?it/s]\n  3%|▎         | 1/36 [00:00<00:23,  1.48it/s]\n  6%|▌         | 2/36 [00:01<00:22,  1.48it/s]\n  8%|▊         | 3/36 [00:02<00:22,  1.45it/s]\n 11%|█         | 4/36 [00:02<00:22,  1.43it/s]\n 14%|█▍        | 5/36 [00:03<00:21,  1.41it/s]\n 17%|█▋        | 6/36 [00:04<00:22,  1.36it/s]\n 19%|█▉        | 7/36 [00:05<00:21,  1.34it/s]\n 22%|██▏       | 8/36 [00:05<00:21,  1.30it/s]\n 25%|██▌       | 9/36 [00:06<00:21,  1.25it/s]\n 28%|██▊       | 10/36 [00:07<00:21,  1.23it/s]\n 31%|███       | 11/36 [00:08<00:21,  1.19it/s]\n 33%|███▎      | 12/36 [00:09<00:20,  1.15it/s]\n 36%|███▌      | 13/36 [00:10<00:20,  1.13it/s]\n 39%|███▉      | 14/36 [00:11<00:19,  1.12it/s]\n 42%|████▏     | 15/36 [00:12<00:18,  1.11it/s]\n 44%|████▍     | 16/36 [00:13<00:18,  1.10it/s]\n 47%|████▋     | 17/36 [00:14<00:17,  1.10it/s]\n 50%|█████     | 18/36 [00:14<00:16,  1.10it/s]\n 53%|█████▎    | 19/36 [00:15<00:15,  1.09it/s]\n 56%|█████▌    | 20/36 [00:16<00:14,  1.08it/s]\n 58%|█████▊    | 21/36 [00:17<00:13,  1.08it/s]\n 61%|██████    | 22/36 [00:18<00:12,  1.08it/s]\n 64%|██████▍   | 23/36 [00:19<00:11,  1.09it/s]\n 67%|██████▋   | 24/36 [00:20<00:11,  1.08it/s]\n 69%|██████▉   | 25/36 [00:21<00:10,  1.08it/s]\n 72%|███████▏  | 26/36 [00:22<00:09,  1.08it/s]\n 75%|███████▌  | 27/36 [00:23<00:08,  1.08it/s]\n 78%|███████▊  | 28/36 [00:24<00:07,  1.08it/s]\n 81%|████████  | 29/36 [00:25<00:06,  1.08it/s]\n 83%|████████▎ | 30/36 [00:26<00:05,  1.08it/s]\n 86%|████████▌ | 31/36 [00:26<00:04,  1.08it/s]\n 89%|████████▉ | 32/36 [00:27<00:03,  1.08it/s]\n 92%|█████████▏| 33/36 [00:28<00:02,  1.08it/s]\n 94%|█████████▍| 34/36 [00:29<00:01,  1.08it/s]\n 97%|█████████▋| 35/36 [00:30<00:00,  1.08it/s]\n100%|██████████| 36/36 [00:31<00:00,  1.08it/s]\n100%|██████████| 36/36 [00:31<00:00,  1.14it/s]",
        "metrics": {
            "predict_time": 44.949506,
            "total_time": 452.850658
        },
        "output": "https://replicate.delivery/pbxt/HuWYFtJyyH50BxruGu1XfUleB3kC2NfbTy2fmHbeEwKS6BsGC/audio.wav",
        "started_at": "2023-04-25T22:18:14.676132Z",
        "status": "succeeded",
        "urls": {
            "get": "https://api.replicate.com/v1/predictions/ngk3yp5omvdsvkcdoljxs2m4ra",
            "cancel": "https://api.replicate.com/v1/predictions/ngk3yp5omvdsvkcdoljxs2m4ra/cancel"
        },
        "version": "f23937d7c80b3c0f06c5a01ec55154388647292cb9398bd7d117678bc930791a"
    }
]